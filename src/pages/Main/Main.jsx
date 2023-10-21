import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAccount } from 'redux/selectors';

export const Main = () => {
  const account = useSelector(selectAccount);
  const navigate = useNavigate();

  useEffect(() => {
    if (!account.isLogined) navigate('/goit-react-hw-07-phonebook/login');
  }, [account, navigate]);
  return (
    <>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
