import LoginForm from "../components/LoginForm";
import { Helmet } from "react-helmet-async";

import css from "./RegistrationPage.module.css";
const LoginPage = () => {
  return (
    <div className={css.RegistrationPage}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />{" "}
    </div>
  );
};

export default LoginPage;
