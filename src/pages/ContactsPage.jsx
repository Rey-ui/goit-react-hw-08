import ContactForm from "../components/ContactForm";
import ContactList from "../components/ContactList";
import SearchBox from "../components/SearchBox";
import { Audio } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations.js";
import { selectError, selectIsLoading } from "../redux/contacts/selectors.js";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import css from "./ContactsPage.module.css";
const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div className={css.contactsPageContent}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <h1 className={css.contactsPageTitle}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && (
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
          wrapperStyle
          wrapperClass
        />
      )}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
