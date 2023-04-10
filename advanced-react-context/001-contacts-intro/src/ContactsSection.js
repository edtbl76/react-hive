import { ContactsList } from "./ContactsList";

export const ContactsSection = ({contacts, name, theme}) => {
    return (
        <div>
            <h2>{name}</h2>
            <ContactsList contacts={contacts} theme={theme} />
        </div>
    );
};