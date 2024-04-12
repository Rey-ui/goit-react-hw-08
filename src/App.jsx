import ContactForm from "./components/ContactForm.jsx";
import SearchBox from "./components/SearchBox.jsx";
import ContactList from "./components/ContactList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "./redux/contactsOps.js";
import { selectError, selectIsLoading } from "./redux/selectors";
import { useEffect } from "react";
import { Audio } from "react-loader-spinner";
function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
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
}

export default App;
