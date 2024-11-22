import { useState } from "react";

import { AiOutlineUser } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi2";

import style from "./Contact.module.css";

import ModalContact from "../ModalContact/ModalContact";

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
    <li>
      <button className={style.item} onClick={handleClick}>
        <div className={style.wrapper}>
          <p className={style.items}>
            <AiOutlineUser className={style.icon} /> {name}
          </p>
          <p className={style.items}>
            <HiOutlinePhone className={style.icon} /> {number}
          </p>
        </div>
      </button>
      {isModalOpen && (
        <ModalContact
          onModalClose={onModalClose}
          name={name}
          number={number}
          id={id}
        />
      )}
    </li>
  );
};

export default Contact;
