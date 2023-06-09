import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import Error from 'components/Error/Error';
import Loader from 'components/Loader/Loader';

import { getContact, getError, getFilter, getIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import NoContact from 'components/NoContact/NoContact';

const Contacts = () => {
  const stateContacts = useSelector(getContact);
  const stateFilter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const isError = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const normilizedFilter = stateFilter.toLowerCase();
  const visibleContacts = stateContacts.filter(contact => {
    return contact.name.toLowerCase().includes(normilizedFilter);
  });
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />

      {isLoading && <Loader />}

      {isError && <Error />}

      {stateContacts.length > 0 && <Filter nameForFind={stateFilter} />}

      <h2>Contact List </h2>
      {visibleContacts.length > 0 ? (
        <ContactList contacts={visibleContacts} />
      ) : (
        <NoContact />
      )}
    </div>
  );
};

export default Contacts;
