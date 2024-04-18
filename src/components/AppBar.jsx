import { useSelector } from "react-redux";
import "../reset.css";
import { AuthNav } from "./AuthNav";
import { selectUserIsSignedIn } from "../redux/auth/selectors";
import css from "./Layout.module.css";
import Navigation from "./Navigation";
import { UserMenu } from "./UserMenu";
const AppBar = ({ children }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <div className={css.wrapper}>
      <header className={css.headerContent}>
        <div className={css.headerContainer}>
          <Navigation />
          {isSignedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <main className={css.mainContent}>{children}</main>
    </div>
  );
};
export default AppBar;
