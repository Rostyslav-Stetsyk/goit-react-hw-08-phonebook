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
import { registerAccount } from 'redux/operations';
import * as Yup from 'yup';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
      'Email must be in the format abc@test.com'
    )
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={registerSchema}
        onSubmit={e => dispatch(registerAccount(e))}
      >
        <FormStyled>
          <FieldWrapper>
            <LabelStyled htmlFor="name">Username</LabelStyled>
            <InputFieldStyled
              id="name"
              name="name"
              placeholder="Jack"
              autoComplete="username"
            />
            <ErrorMessageStyled component="div" name="name" />
          </FieldWrapper>
          <FieldWrapper>
            <LabelStyled htmlFor="email">Email</LabelStyled>
            <InputFieldStyled
              id="email"
              name="email"
              type="email"
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
              autoComplete="new-password"
              placeholder="&#183;&#183;&#183;&#183;&#183;&#183;"
            />
            <ErrorMessageStyled component="div" name="password" />
          </FieldWrapper>

          <FormButtonWrapper>
            <ButtonSubmit type="submit">Register</ButtonSubmit>
          </FormButtonWrapper>
        </FormStyled>
      </Formik>
    </>
  );
};
