import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Section } from 'components/Section/Section';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAccount } from 'redux/selectors';

export const Register = () => {
  const account = useSelector(selectAccount);
  const navigate = useNavigate();

  useEffect(() => {
    if (account.isLogined) navigate('/goit-react-hw-08-phonebook');
  }, [account, navigate]);
  return (
    <Section title={'Register'}>
      <RegisterForm />
    </Section>
  );
};
