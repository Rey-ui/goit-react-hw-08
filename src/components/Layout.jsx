import { useSelector } from "react-redux";
import "../reset.css";
import { AuthNav } from "./AuthNav";
import { selectUserIsSignedIn } from "../redux/auth/selectors";
import css from "./Layout.module.css";
import ContactsNav from "./ContactsNav";
import { UserMenu } from "./UserMenu";
const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <div className={css.wrapper}>
      <header className={css.headerContent}>
        <div className={css.headerContainer}>
          <ContactsNav />
          {isSignedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </header>
      <main className={css.mainContent}>{children}</main>
    </div>
  );
};
export default Layout;
