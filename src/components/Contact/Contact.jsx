import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi2";
import { GoTrash } from "react-icons/go";
import style from "./Contact.module.css";

import Modal from "../Modal/Modal";

const Contact = ({ id, name, number }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onModalOpen = () => {
    setIsModalOpen(true);
  };

  const onModalClose = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    onModalOpen();
  };

  return (
    <li className={style.item}>
      <div className={style.wrapper}>
        <p className={style.items}>
          <AiOutlineUser className={style.icon} /> {name}
        </p>
        <p className={style.items}>
          <HiOutlinePhone className={style.icon} /> {number}
        </p>
      </div>
      <button className={style.btn} type="button" onClick={handleClick}>
        <GoTrash />
      </button>
      {isModalOpen && <Modal id={id} onModalClose={onModalClose} />}
    </li>
  );
};

export default Contact;
