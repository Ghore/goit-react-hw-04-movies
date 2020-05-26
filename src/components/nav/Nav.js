import React from "react";
import { Link } from "react-router-dom";
import style from '../css/nav.module.css'

const Nav = () => {
  return (
    <ul className={style.navigation}>
      <li className={style.navigationListItem}>
        <Link to="/">HOME</Link>
      </li >
      <li>
        <Link to="/movies">MOVIES</Link>
      </li>
    </ul>
  );
};
export default Nav;
