import * as Yup from "yup";

export const validationContacts = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^[0-9-]+$/, "Must be only digits")
    .min(3, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
});

export const validationLogin = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
});

export const validationRegister = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(8, "Too short!")
    .max(20, "Too long!")
    .required("Required"),
});
