import RegisterForm from "../components/RegistrationForm";
import { Helmet } from "react-helmet-async";
import css from "./RegistrationPage.module.css";
const RegistrationPage = () => {
  return (
    <div className={css.RegistrationPage}>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default RegistrationPage;
