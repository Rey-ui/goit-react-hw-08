import { useDispatch, useSelector } from "react-redux";
import { apiLogoutUser } from "../redux/auth/operations";
import { selectUserData } from "../redux/auth/selectors";
import "../reset.css";
import css from "./UserMenu.module.css";
export const UserMenu = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(apiLogoutUser());
  };
  const userData = useSelector(selectUserData);
  return (
    <div className={css.userMenuContent}>
      <p className={css.userMenuText}>Welcome, {userData.name}!</p>
      <button className={css.userMenuButton} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
};
