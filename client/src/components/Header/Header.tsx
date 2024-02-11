import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
// import classes from "./header.module.scss";
import "./header.scss";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import { log } from "console";
import PersonalAccount from "src/pages/Personal account/PersonalAccount";
import { NavLink } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const categories = useSelector((state: RootState) => state.categories);
  const userId = 1;
  const headerNavigate = (path: string) => {
    console.log("====================================");
    console.log("hey");
    console.log("====================================");
    navigate(path);
  };
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__logo' onClick={() => headerNavigate("/")}></div>
        <nav className='nav'>
          {categories.map((item) => (
            <div className='nav__item' key={item.id}>
              {item.name}
            </div>
          ))}
        </nav>
        <div className='header__user-panel user-panel'>
          <div className='search-icon user-panel__icon'></div>
          <div
            className='user-icon user-panel__icon'
            onClick={() => headerNavigate(`/lk/${userId}`)}></div>
          <div
            className='cart-icon user-panel__icon'
            onClick={() => headerNavigate(`/${userId}/cart`)}></div>
        </div>
      </div>
    </header>
  );
}

export default Header;
