import React, {useState} from 'react';

export const Categories: React.FC = () => {
  const [active, setActive] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',];

  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => <li key={item}
                                             onClick={() => setActive(index)}
                                             className={active === index ? "active" : ""}
        >{item}</li>)
        }
      </ul>
    </div>
  );
}