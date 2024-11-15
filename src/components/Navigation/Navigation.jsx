import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import clsx from "clsx";
import style from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={style.wrapper}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(style.link, isActive && style.active)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            clsx(style.link, isActive && style.active)
          }
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
};

export default Navigation;
