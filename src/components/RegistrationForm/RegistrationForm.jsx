import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";

import style from "./RegistrationForm.module.css";

import { validationRegister } from "../../utils/yup";
import { register } from "../../redux/auth/operations";

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <div className={style.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationRegister}
      >
        <Form className={style.form}>
          <label className={style.label}>
            Name
            <Field
              type="text"
              name="name"
              className={style.field}
              placeholder="Enter your name..."
              autoComplete="off"
            />
            <ErrorMessage
              className={style.errorMessage}
              name="name"
              component="span"
            />
          </label>
          <label className={style.label}>
            Email
            <Field
              type="text"
              name="email"
              className={style.field}
              placeholder="Enter email..."
              autoComplete="off"
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
              autocomplete="off"
            />
            <ErrorMessage
              className={style.errorMessage}
              name="password"
              component="span"
            />
          </label>
          <button type="submit" className={style.btn}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
