import { Link, Outlet } from 'react-router-dom';
import { Footer, Header, User, UserImgFrame, Wrapper } from './Layout.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAccount } from 'redux/selectors';
import { AiOutlineUser } from 'react-icons/ai';
import { IoExitOutline } from 'react-icons/io5';
import { logoutAccount } from 'redux/operations';

export const Layout = () => {
  const account = useSelector(selectAccount);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Header>
        {account.isLogined ? (
          <>
            <Link to="/goit-react-hw-07-phonebook">Home</Link>
            <User>
              <UserImgFrame>
                <AiOutlineUser />
              </UserImgFrame>
              <p>{account.user.name}</p>
              <button
                onClick={() => dispatch(logoutAccount(account.token))}
                type="button"
              >
                <IoExitOutline />
              </button>
            </User>
          </>
        ) : (
          <>
            <Link to="/goit-react-hw-07-phonebook/login">Login</Link>
            <Link to="/goit-react-hw-07-phonebook/register">Register</Link>
          </>
        )}
      </Header>
      <Outlet />
      <Footer>
        <p>Created by Rostyslav Stetsyk</p>
      </Footer>
    </Wrapper>
  );
};
