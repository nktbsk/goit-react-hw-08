import style from "./ModalContact.module.css";
import { useEffect, useState } from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi2";
import { GoTrash } from "react-icons/go";
import ModalDelete from "../ModalDelete/ModalDelete";
import { patchContact } from "../../redux/contacts/operations";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ModalContact = ({ onModalClose, name, number, id }) => {
  const dispatch = useDispatch();
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);

  // Закрытие модалки при нажатии на Esc
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.code === "Escape") {
        onModalClose();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onModalClose]);
  // Закрытие модалки при клике вне модалки
  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  };

  const onModalDeleteOpen = () => {
    setIsModalDeleteOpen(true);
  };

  const onModalDeleteClose = () => {
    setIsModalDeleteOpen(false);
  };
  const handleClick = () => {
    onModalDeleteOpen();
  };

  const handleSubmit = (values) => {
    dispatch(patchContact({ id, values }));
    onModalClose();
  };

  return (
    <div className={style.backdrop} onClick={onBackdropClick}>
      <div className={style.modal}>
        <Formik
          initialValues={{ name: name, number: number }}
          onSubmit={handleSubmit}
        >
          <Form className={style.form}>
            <label className={style.label} htmlFor="name"></label>
            <div className={style.wrapperField}>
              <AiOutlineUser className={style.iconField} />
              <Field
                className={style.field}
                id="name"
                type="text"
                name="name"
              />
            </div>
            <ErrorMessage name="name" component="div" />
            <label className={style.label} htmlFor="number"></label>
            <div className={style.wrapperField}>
              <HiOutlinePhone className={style.iconField} />
              <Field
                className={style.field}
                id="number"
                type="tel"
                name="number"
              />
            </div>
            <ErrorMessage name="number" component="div" />
            <div className={style.wrapperBtn}>
              <button className={style.btn} type="submit">
                <IoCheckmarkCircleOutline className={style.iconCheck} />
              </button>
              <button className={style.btn} type="button" onClick={handleClick}>
                <GoTrash className={style.iconTrash} />
              </button>
            </div>
          </Form>
        </Formik>

        {isModalDeleteOpen && (
          <ModalDelete id={id} onModalClose={onModalDeleteClose} />
        )}
      </div>
    </div>
  );
};

export default ModalContact;
