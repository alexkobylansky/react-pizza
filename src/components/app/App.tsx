import React from 'react';
import '../../scss/app.scss';
import {Header} from "../header/Header";
import {Home} from "../../pages/Home";
import {Route, Routes} from "react-router-dom";
import {Layout} from "../Layout";
import {Cart} from "../../pages/Cart";
import {NotFound} from "../../pages/NotFound";

export const App: React.FC = () => {

  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Layout/>}/>
            <Route index element={<Home/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="/*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}