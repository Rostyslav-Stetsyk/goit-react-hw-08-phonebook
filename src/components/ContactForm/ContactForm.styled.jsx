import styled from '@emotion/styled';
import { Form, ErrorMessage, Field } from 'formik';

// export const FormStyled = styled(Form)`
//   margin-top: 16px;
// `;

// export const Label = styled.label`
//   font-size: 21px;
//   display: block;
//   padding: 4px 0;
// `;

// export const FieldWrapper = styled.div`
//   height: 70px;
// `;

// export const ErrorMessageStyled = styled(ErrorMessage)`
//   color: red;
// `;

// export const ButtonSubmit = styled.button`
//   margin-top: 8px;
//   padding: 4px;
//   background-color: aliceblue;
//   border-radius: 4px;
//   border: 1px solid lightgray;
//   cursor: pointer;

//   :hover {
//     box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//   }
// `;

export const FormStyled = styled(Form)`
  position: relative;
  margin-top: 16px;
`;

export const LabelStyled = styled.label`
  font-size: 16px;
  display: block;
  padding: 10px 0;
  color: #2c3e50;
`;

export const FieldWrapper = styled.div`
  margin-bottom: 16px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  margin-top: 10px;
  color: #e74c3c;
  font-size: 14px;
`;

export const ButtonSubmit = styled.button`
  padding: 10px 20px;
  background-color: #3498db;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  font-size: 16px;
  transition: background-color 0.3s ease-in-out;

  :hover,
  :focus {
    background-color: #2980b9;
  }
`;

export const InputFieldStyled = styled(Field)`
  padding: 10px;
  font-size: 16px;
  width: 100%;
  border: 1px solid #3498db;
  border-radius: 4px;
`;

export const FormButtonWrapper = styled.div`
  text-align: center;
`;
