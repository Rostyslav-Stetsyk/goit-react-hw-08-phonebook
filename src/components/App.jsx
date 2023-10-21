import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import { Main } from 'pages/Main/Main';
import { Layout } from './Layout/Layout';
import { Login } from 'pages/Login/Login';
import { Register } from 'pages/Register/Register';


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/goit-react-hw-07-phonebook" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
};
