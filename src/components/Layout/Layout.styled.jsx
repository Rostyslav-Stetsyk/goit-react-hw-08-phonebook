import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 0 20px 90px 20px;
  margin: 0 auto;
  max-width: 420px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #3498db;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  a {
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    transition: background-color 0.3s ease-in-out;
  }

  a:hover,
  a:focus {
    background-color: #2980b9;
  }
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: calc(100vw - 40px);
  max-width: 380px;
  padding: 20px;
  background-color: #3498db;
  border-radius: 8px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.2);

  p {
    margin: 0;
    color: white;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 26px;
    height: 26px;
    padding: 0;
    background-color: #e74c3c;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    :hover,
    :focus {
      background-color: #c0392b;
    }
    svg {
      stroke: white;
      height: 20px;
      width: 20px;
    }
  }

  p {
    color: white;
    margin-right: 10px;
  }
`;

export const UserImgFrame = styled.div`
  width: 26px;
  height: 26px;
  border: 2px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin-right: 10px;

  svg {
    fill: white;
  }
`;
