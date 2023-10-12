import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding: 0 20px 90px 20px;
  margin: 0 auto;
  max-width: 420px;
`;

// export const Header = styled.header`
//   display: flex;
//   gap: 20px;
//   border: 1px solid lightgrey;
//   border-bottom-right-radius: 8px;
//   border-bottom-left-radius: 8px;
//   padding: 20px;
// `;

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

// export const Footer = styled.footer`
//   position: absolute;
//   bottom: 0;
//   width: calc(100vw - 40px);
//   max-width: 380px;
//   border: 1px solid lightgrey;
//   border-top-right-radius: 8px;
//   border-top-left-radius: 8px;
//   padding: 20px;
// `;

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
