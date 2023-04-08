import { useDispatch } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';
import { Button } from './Contact.styled';

export const Contact = ({contact}) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(contact.id));
    return (
        <>
            {contact.name}: {contact.number}
            <Button type="button" onClick={handleDelete}>Delete</Button>
        </>    
    )
}