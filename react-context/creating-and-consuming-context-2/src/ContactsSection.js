import { ContactsList } from "./ContactsList";

export const ContactsSection = ({contacts, name }) => {
    return (
        <div>
            <h2>{name}</h2>
            <ContactsList contacts={contacts} />
        </div>
    );
}