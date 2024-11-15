import { NavLink } from "react-router-dom";
import clsx from "clsx";
import style from "./AuthNav.module.css";

export default function AuthNav() {
  return (
    <div className={style.wrapper}>
      <NavLink
        to="/register"
        className={({ isActive }) => clsx(style.link, isActive && style.active)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => clsx(style.link, isActive && style.active)}
      >
        Log In
      </NavLink>
    </div>
  );
}
