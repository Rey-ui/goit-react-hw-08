import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "classnames";
export const AuthNav = () => {
  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.headerAuthLink, {
      [css.active]: isActive,
    });
  return (
    <div className={css.headerContainerAuth}>
      <NavLink className={getNavLinkClassNames} to="/register">
        Register
      </NavLink>
      <NavLink className={getNavLinkClassNames} to="/login">
        Log In
      </NavLink>
    </div>
  );
};
