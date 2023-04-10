import React, { useContext } from "react";
import { ContactsSection } from "./ContactsSection";
import { ThemeArea, ThemeContext } from "./ThemeContext";
import { ThemeSwitcher } from "./ThemeSwitcher";


const family = [
    { name: "Finn the Human" },
    { name: "Jake the Dog "}
];

const friends = [
    { name: "Marceline" },
    { name: "Princess Bubblegum" }
];

export const ContactsApp = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className={`theme-${theme}`}>
            <h1>Contacts</h1>
            <ThemeSwitcher />
            <ThemeArea initialTheme="light">
                <ContactsSection contacts={family} name="Family" />
            </ThemeArea>
            <ThemeArea initialTheme="dark">
                <ContactsSection contacts={friends} name="Friends" />
            </ThemeArea>
        </div>

    );
}