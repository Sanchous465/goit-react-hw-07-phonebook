import { Formik, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from './ContactForm.styled';
import { addContacts } from 'redux/operations';

const initialValues = {
  name: '',
  phone: '',
};

export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const addNewContact = newContact => {
    dispatch(addContacts(newContact));
  };

  const checkExistingContact = newContact => {
    const checked = contacts.items.filter(contact => {
      return contact.name.toLowerCase() === newContact.name.toLowerCase();
    });
    if (checked.length !== 0) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      addNewContact(newContact);
    }
  };

  const handleSubmit = ({ name, phone }, { resetForm }) => {
    checkExistingContact({ name, phone });
    resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form autoComplete="off">
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Phone
          <Input
            type="tel"
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};