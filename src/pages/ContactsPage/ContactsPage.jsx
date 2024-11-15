import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import style from "./ContactsPage.module.css";

import Loader from "../../components/Loader/Loader";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Phonebook</h1>
      <div className={style.wrapper}>
        <div className={style.formWrapper}>
          <ContactForm />
          <SearchBox />
        </div>
        {isLoading && <Loader />}
        {error ? (
          <p className={style.errorText}>An error occured: {error}</p>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
};

export default ContactsPage;
