import { ContactItem } from "./ContactItem";

export const ContactsList = ({contacts }) => {
    return contacts.map((contact) => (
        <ContactItem {...contact} key={contact.name} />
    ));
};