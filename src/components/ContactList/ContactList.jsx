import { useDispatch, useSelector } from 'react-redux';
import {
  ContactListStyled,
  ErrorParagraph,
  ListElement,
  LoadingParagraph,
} from './ContactList.styled';
import {
  selectAccount,
  selectContacts,
  selectFilteredContacts,
} from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';

export const ContactList = () => {
  const account = useSelector(selectAccount);
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispach = useDispatch();

  useEffect(() => {
    if (account.isLogined) dispach(fetchContacts());
  }, [dispach, account]);

  return (
    <>
      {contacts.isLoading && <LoadingParagraph>Loading...</LoadingParagraph>}
      {contacts.error && (
        <ErrorParagraph>Something went wrong, please try again</ErrorParagraph>
      )}
      {contacts.list.length ? (
        filteredContacts.length ? (
          <ContactListStyled>
            {filteredContacts.map(({ id, name, number }) => (
              <ListElement key={id}>
                <div>
                  <p>{name}:</p>
                  <p>{number}</p>
                </div>
                <button
                  type="button"
                  id={id}
                  onClick={e => dispach(deleteContact(e.target.id))}
                >
                  Delete
                </button>
              </ListElement>
            ))}
          </ContactListStyled>
        ) : (
          <ErrorParagraph>No contacts with this name</ErrorParagraph>
        )
      ) : (
        <ErrorParagraph>No contacts</ErrorParagraph>
      )}
    </>
  );
};
