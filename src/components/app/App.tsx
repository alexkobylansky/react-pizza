import React, {useEffect, useRef, useState} from 'react';
import '../../scss/app.scss';
import {Header} from "../header/Header";
import {Categories} from "../categories/Categories";
import {Sort} from "../sort/Sort";
import {PizzaBlock} from "../pizza-block/PizzaBlock";
import {PizzaBlockSkeleton} from "../pizza-block/PizzaBlockSkeleton";

const url: string | undefined = process.env.REACT_APP_BASE_URL;

export const App: React.FC = () => {
  const firstInit = useRef(false);
  const [pizzas, setPizzas] = useState<IPizza[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPizzas = async (): Promise<void> => {
    try {
      const res = await fetch(`${url}/pizzas`);
      if (res.status == 200) {
        const req: IPizza[] = await res.json();
        setPizzas(req);
      } else if (res.status === 400) {
        throw new Error('Bad request');
      } else if (res.status === 404) {
        throw new Error('Not Found')
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!firstInit.current) {
      void getPizzas();
    }
    firstInit.current = true;
  }, []);

  const skeleton = isLoading ? [...new Array(8)].map((_, index) => <PizzaBlockSkeleton key={index}/>) : null;
  const content = !!pizzas.length ? pizzas.map(pizza => <PizzaBlock key={pizza.name} {...pizza}/>) : null;

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories/>
              <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {skeleton}
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}