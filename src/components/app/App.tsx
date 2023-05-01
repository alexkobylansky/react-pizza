import React from 'react';
import '../../scss/app.scss';
import {Header} from "../header/Header";
import {Categories} from "../categories/Categories";
import {Sort} from "../sort/Sort";
import {PizzaBlock} from "../pizza-block/PizzaBlock";
// @ts-ignore
import pizzas from "../../pizzas.json";

export const App: React.FC = () => {
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
              {pizzas.map(pizza => <PizzaBlock key={pizza.name} {...pizza}/>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}