import { useSelector } from "react-redux";
import { getContacts, getFilter } from 'redux/selectors';

import { Contact } from 'components/Contact/Contact';
import { ErrorText } from "components/App.styled";

import { List, Item } from './ContactsList.styled';



export const ContactsList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    
    const filteredContacts = contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase()));
    return (
        <List>
        {contacts.length > 0 ? filteredContacts.map(contact => {
        return <Item key={contact.id}>
            <Contact contact={contact} />
            </Item>    
        }  
        ) : <ErrorText>Sorry! No contacts in phonebook!</ErrorText>}   
        </List>        
    ) 
}

// ContactsList.propTypes = {
//     contacts: PropTypes.arrayOf(PropTypes.exact({
//         id: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired
//     }).isRequired).isRequired
// }