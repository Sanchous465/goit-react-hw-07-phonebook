import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { List } from './ContactList.styled';
import {
  selectContacts,
  selectFilters,
  selectIsLoading,
  selectError,
} from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilters);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <List>
        {contacts.length > 0 &&
          getFilterContacts().map(contact => {
            return (
              <ContactItem contact={contact} key={contact.id}></ContactItem>
            );
          })}
      </List>{' '}
    </>
  );
};