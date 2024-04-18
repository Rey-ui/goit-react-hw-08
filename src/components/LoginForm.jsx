import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
//import css from "./LoginForm.module.css";
import css from "./RegisterForm.module.css";
import { useDispatch } from "react-redux";
import { apiLoginUser } from "../redux/auth/operations";
const UserRegisterSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required!")
    .email("Must be a valid email!"),
  password: Yup.string()
    .required("Password is required!")
    .min(8, "Password must be at least 8 characters!"),
});
const INITIAL_FORM_DATA = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const dispatch = useDispatch();
  // const onLogin = (formData) => {
  //   formData.preventDefault();
  //   const form = formData.currentTarget;
  //   dispatch(apiLoginUser(formData));
  //   form.resetForm();
  // };
  const handleSubmit = (values) => {
    dispatch(
      apiLoginUser({
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
        <h2 className={css.registerTitle}>Login</h2>

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
          Sign In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
