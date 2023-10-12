import styled from '@emotion/styled';

// export const FilterForm = styled.form`
//   display: flex;
//   justify-content: space-between;
//   margin-top: 21px;

//   div {
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//   }
// `;

// export const ButtonReload = styled.button`
//   width: 25px;
//   height: 25px;
//   padding: 0;

//   svg {
//     height: 100%;
//     width: 100%;
//   }
// `;

export const FilterForm = styled.form`
  display: flex;
  justify-content: space-between;
  margin-top: 21px;
  background-color: #ecf0f1;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease-in-out;
  align-items: flex-end;

  :hover,
  :focus {
    background-color: #d5dbdb;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  label {
    padding: 10px 0;
    font-size: 16px;
    color: #2c3e50;
  }

  input {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #3498db;
    border-radius: 4px;
  }
`;

export const ButtonReload = styled.button`
  width: 40px;
  height: 40px;
  padding: 4px;
  background-color: #2ecc71;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  svg {
    height: 100%;
    width: 100%;
    fill: white;
  }

  :hover,
  :focus {
    background-color: #27ae60;
  }
`;
