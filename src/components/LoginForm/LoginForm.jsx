import {
  ButtonSubmit,
  ErrorMessageStyled,
  FieldWrapper,
  FormButtonWrapper,
  FormStyled,
  InputFieldStyled,
  LabelStyled,
} from 'components/ContactForm/ContactForm.styled';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { loginAccount } from 'redux/operations';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={e => dispatch(loginAccount(e))}
      >
        <FormStyled>
          <FieldWrapper>
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <InputFieldStyled
              id="email"
              name="email"
              autoComplete="email"
              placeholder="test@test.com"
            />
            <ErrorMessageStyled component="div" name="email" />
          </FieldWrapper>
          <FieldWrapper>
            <LabelStyled htmlFor="password">Password</LabelStyled>
            <InputFieldStyled
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              placeholder="&#183;&#183;&#183;&#183;&#183;&#183;"
            />
            <ErrorMessageStyled component="div" name="password" />
          </FieldWrapper>
          <FormButtonWrapper>
            <ButtonSubmit type="submit">Login</ButtonSubmit>
          </FormButtonWrapper>
        </FormStyled>
      </Formik>
    </>
  );
};
