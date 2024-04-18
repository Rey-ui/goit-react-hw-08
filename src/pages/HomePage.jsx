import { Helmet } from "react-helmet-async";
import css from "./HomePage.module.css";
const HomePage = () => {
  return (
    <div className={css.HomePage}>
      <Helmet>
        <title>Welcome to the Contact Book app</title>
      </Helmet>
      <h1 className={css.HomePageTitle}>Welcome to the Contact Book app🎉</h1>
    </div>
  );
};

export default HomePage;
