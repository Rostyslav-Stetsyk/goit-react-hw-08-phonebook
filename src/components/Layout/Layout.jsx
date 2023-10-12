import { Link, Outlet } from 'react-router-dom';
import { Footer, Header, Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <Wrapper>
      <Header>
        <Link to="/goit-react-hw-07-phonebook">Home</Link>
        <Link to="/goit-react-hw-07-phonebook/login">Login</Link>
        <Link to="/goit-react-hw-07-phonebook/register">Register</Link>
      </Header>
      <Outlet />
      <Footer>
        <p>Created by Rostyslav Stetsyk</p>
      </Footer>
    </Wrapper>
  );
};
