import { ContactItem } from "./ContactItem";

export const ContactsList = ({contacts, theme}) => {
    return contacts.map((contact) => (
        <ContactItem {...contact} key={contact.name} theme={theme} />
    ));
};