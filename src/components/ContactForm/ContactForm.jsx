import { Formik, Form, Field, ErrorMessage } from "formik";
import { IoPersonAddOutline } from "react-icons/io5";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import style from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsOps";
import toast from "react-hot-toast";

// Валидация
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContacts({
        id: nanoid(),
        name: values.name,
        number: values.phone,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Contact successfully added!");
      })
      .catch((error) => {
        toast.error("Failed to add contact!");
      });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", phone: "", id: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form}>
        <label className={style.label}>
          <span className={style.span}>Name</span>
          <Field
            className={style.field}
            type="text"
            name="name"
            placeholder="Alina Becker"
          />
          <ErrorMessage
            name="name"
            component="div"
            className={style.errorMessage}
          />
        </label>

        <label className={style.label}>
          <span className={style.span}>Number</span>
          <Field
            className={style.field}
            type="text"
            name="phone"
            placeholder="000-000-0000"
          />
          <ErrorMessage
            name="phone"
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
