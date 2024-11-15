import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoPersonAddOutline } from "react-icons/io5";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contacts/operations";
import { validationContacts } from "../../utils/yup";

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContacts(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationContacts}
    >
      <Form className={style.form}>
        <label className={style.label}>
          Name
          <Field
            className={style.field}
            type="text"
            name="name"
            placeholder="Alina Becker"
            autoComplete="off"
          />
          <ErrorMessage
            name="name"
            component="div"
            className={style.errorMessage}
          />
        </label>
        <label className={style.label}>
          Number
          <Field
            className={style.field}
            type="tel"
            name="number"
            placeholder="000-000-0000"
            autoComplete="off"
          />
          <ErrorMessage
            name="number"
            component="div"
            className={style.errorMessage}
          />
        </label>
        <button className={style.btn} type="submit">
          <IoPersonAddOutline className={style.icon} />
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
