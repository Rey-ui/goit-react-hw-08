import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { apiRegisterUser } from "../redux/auth/operations";
const UserRegisterSchema = Yup.object().shape({
  name: Yup.string()
    .required("User name is required!")
    .min(2, "User name must be at least 2 characters!")
    .max(50, "User name must be less than 50 characters!"),
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});
const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  password: "",
};
const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(
      apiRegisterUser({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    )
      .unwrap()
      .then(() => {
        console.log("login success");
      })
      .catch(() => {
        console.log("login error");
      });

    return false;
  };
  return (
    <Formik
      validationSchema={UserRegisterSchema}
      initialValues={INITIAL_FORM_DATA}
      onSubmit={handleSubmit}
    >
      <Form className={css.registerform}>
        <h2 className={css.registerTitle}>Register</h2>

        <label className={css.registerLabel}>
          <span className={css.registerSpan}>User name:</span>
          <Field
            className={css.registerInput}
            placeholder="name"
            type="text"
            name="name"
          />
          <ErrorMessage name="name" component="span" />
        </label>
        <label className={css.registerLabel}>
          <span className={css.registerSpan}>Email:</span>
          <Field
            className={css.registerInput}
            placeholder="qwerty@gmail.com"
            type="text"
            name="email"
          />
          <ErrorMessage name="email" component="span" />
        </label>
        <label className={css.registerLabel}>
          <span className={css.registerSpan}>Password:</span>
          <Field
            className={css.registerInput}
            placeholder="Enter your password"
            type="password"
            name="password"
          />
          <ErrorMessage name="password" component="span" />
        </label>

        <button
          className={css.registerButton}
          type="submit"
          title="Click to register user"
          aria-label="Add new mailbox"
        >
          SIgn Up
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
