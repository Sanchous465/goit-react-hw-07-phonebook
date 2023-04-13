import { useDispatch } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { Layout, HeroTitle, Title } from './Layout.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(fetchContacts());
  }, [dispacth]);

  return (
    <Layout>
      <HeroTitle>Phonebook</HeroTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      <ContactList />
      <GlobalStyle />
    </Layout>
  );
};