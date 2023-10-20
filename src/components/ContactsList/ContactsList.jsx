import { ContactsListWrap } from './ContactsList.styled';

export const ContactsList = props => {
  return (
    <ContactsListWrap>
      {props.contacts.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}
          </li>
        );
      })}
    </ContactsListWrap>
  );
};
