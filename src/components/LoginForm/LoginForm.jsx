import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import style from "./LoginForm.module.css";

import { validationLogin } from "../../utils/yup";
import { login } from "../../redux/auth/operations";

const initialValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationLogin}
      >
        <Form className={style.form}>
          <label className={style.label}>
            Email
            <Field
              type="text"
              name="email"
              className={style.field}
              placeholder="Enter email..."
            />
            <ErrorMessage
              className={style.errorMessage}
              name="email"
              component="span"
            />
          </label>
          <label className={style.label}>
            Password
            <Field
              type="password"
              name="password"
              className={style.field}
              placeholder="Enter password..."
            />
            <ErrorMessage
              className={style.errorMessage}
              name="password"
              component="span"
            />
          </label>
          <button type="submit" className={style.btn}>
            Log in
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
