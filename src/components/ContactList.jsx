import Contact from "./Contact.jsx";
import { useSelector } from "react-redux";
import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../redux/selectors.js";
const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  return (
    <ul className={css.contactList}>
      {filteredContacts.map((contact) => (
        <li className={css.contactItem} key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};
export default ContactList;
