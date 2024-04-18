import { useDispatch } from "react-redux";
import { apiLoginUser } from "../redux/auth/operations";
import LoginForm from "../components/LoginForm";
import { Helmet } from "react-helmet-async";

import css from "./RegistrationPage.module.css";
const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = (formData) => {
    dispatch(apiLoginUser(formData));
  };
  return (
    <div className={css.RegistrationPage}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm onLogin={onLogin} />{" "}
    </div>
  );
};

export default LoginPage;
