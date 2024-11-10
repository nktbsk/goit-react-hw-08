import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { selectFilterContacts } from "../../redux/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(selectFilterContacts);

  return (
    <ul className={style.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
