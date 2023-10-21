import styled from '@emotion/styled';
import { Form, ErrorMessage, Field } from 'formik';

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
