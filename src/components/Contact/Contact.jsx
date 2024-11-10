import { AiOutlineUser } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi2";
import { GoTrash } from "react-icons/go";
import style from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContacts(contact.id));
  };

  return (
    <li className={style.wrapper}>
      <ul className={style.list}>
        <li className={style.listItem}>
          <AiOutlineUser className={style.icon} />
          <span className={style.span}>{contact.name}</span>
        </li>
        <li className={style.listItem}>
          <HiOutlinePhone className={style.icon} />
          <span className={style.span}>{contact.number}</span>
        </li>
      </ul>
      <button className={style.btn} type="button" onClick={handleDelete}>
        <GoTrash />
      </button>
    </li>
  );
};

export default Contact;
