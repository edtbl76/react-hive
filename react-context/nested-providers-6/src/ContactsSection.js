import { ContactsList } from "./ContactsList";
import { ThemeSwitcher } from "./ThemeSwitcher";

export const ContactsSection = ({contacts, name }) => {
    return (
        <div>
            <h2>{name}</h2>
            <ThemeSwitcher />
            <ContactsList contacts={contacts} />
        </div>
    );
}