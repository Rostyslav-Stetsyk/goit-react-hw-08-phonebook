import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Main } from 'pages/Main/Main';
import { Layout } from './Layout/Layout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshAccount } from 'redux/operations';
import { selectAccount } from 'redux/selectors';
import { LoadingParagraph } from './ContactList/ContactList.styled';

export const App = () => {
  const account = useSelector(selectAccount);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshAccount());
  }, [dispatch]);
  return account.isRefreshing && !account.isLogined ? (
    <LoadingParagraph>Loading...</LoadingParagraph>
  ) : (
    <>
      <Routes>
        <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
