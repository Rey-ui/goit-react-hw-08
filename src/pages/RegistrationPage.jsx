import { useDispatch } from "react-redux";
import RegisterForm from "../components/RegistrationForm";
import { apiRegisterUser } from "../redux/auth/operations";
import { Helmet } from "react-helmet-async";
import css from "./RegistrationPage.module.css";
const RegistrationPage = () => {
  const dispatch = useDispatch();
  const onRegister = (formData) => {
    console.log(formData);
    dispatch(apiRegisterUser(formData));
  };
  return (
    <div className={css.RegistrationPage}>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm onRegister={onRegister} />
    </div>
  );
};

export default RegistrationPage;
