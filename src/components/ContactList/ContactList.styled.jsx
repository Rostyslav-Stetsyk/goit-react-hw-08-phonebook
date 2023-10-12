import styled from '@emotion/styled';

export const LoadingParagraph = styled.p`
  padding: 8px 0;
  color: #e74c3c;
  font-weight: bold;
  animation: loadingAnimation 1s infinite alternate;
  @keyframes loadingAnimation {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const ErrorParagraph = styled.p`
  color: #e74c3c;
  font-weight: bold;
  padding: 8px 0;
`;

// export const ContactListStyled = styled.ul`
//   display: flex;
//   flex-direction: column;
//   margin-top: 21px;
//   border: 1px solid gray;

//   li:nth-of-type(2n + 1) {
//     background-color: lightgray;
//   }
// `;

// export const ListElement = styled.li`
//   display: flex;
//   justify-content: space-between;
//   padding: 4px;
// `;

export const ContactListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 21px;
  border: 1px solid #3498db;
  border-radius: 8px;
  overflow: hidden;
`;

export const ListElement = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  transition: background-color 0.3s ease-in-out;

  :nth-of-type(odd) {
    background-color: #ecf0f1;
  }

  :hover {
    background-color: #2980b9;
    color: white;
  }

  p {
    color: #2c3e50;
    margin: 0;
  }

  button {
    padding: 5px 10px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover,
    &:focus {
      background-color: #c0392b;
    }
  }
`;
