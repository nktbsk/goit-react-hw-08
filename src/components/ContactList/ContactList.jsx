import { useSelector } from "react-redux";
import {
  selectFilter,
  selectFilteredContacts,
} from "../../redux/filters/selectors";

import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";
import { selectLoading } from "../../redux/contacts/selectors";

const ContactList = () => {
  const filteredList = useSelector(selectFilteredContacts);
  const startFilter = useSelector(selectFilter);
  const isLoading = useSelector(selectLoading);

  return (
    <>
      {!startFilter && filteredList.length === 0 && !isLoading && (
        <p className={style.text}>There are no contacts yet 😔</p>
      )}
      {startFilter && filteredList.length === 0 ? (
        <p className={style.text}>
          There are no contacts according to your search...
        </p>
      ) : (
        <ul className={style.list}>
          {filteredList.map((item) => (
            <Contact
              key={item.id}
              id={item.id}
              name={item.name}
              number={item.number}
            />
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactList;
