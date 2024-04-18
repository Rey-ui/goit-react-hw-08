import css from "./ContactsNav.module.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import clsx from "classnames";
import { selectUserIsSignedIn } from "../redux/auth/selectors";
const getNavLinkClassNames = ({ isActive }) =>
  clsx(css.headerLink, {
    [css.active]: isActive,
  });
const Navigation = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <div className={css.headerContainerContacts}>
      <div className={css.ContactsContainerLink}>
        <NavLink className={getNavLinkClassNames} to="/">
          Home
        </NavLink>
      </div>
      {isSignedIn && (
        <div className={css.ContactsContainerLink}>
          <NavLink className={getNavLinkClassNames} to="/contacts">
            Contacts
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navigation;
