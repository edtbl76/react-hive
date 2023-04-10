import React from "react";
import { ContactsSection } from "./ContactsSection";
import { ThemeArea } from "./ThemeContext";


const family = [
    { name: "Finn the Human" },
    { name: "Jake the Dog "}
];

const friends = [
    { name: "Marceline" },
    { name: "Princess Bubblegum" }
];

export const ContactsApp = () => {
    return (
        <div>
            <h1>Contacts</h1>
            <ThemeArea initialTheme="light">
                <ContactsSection contacts={family} name="Family" />
            </ThemeArea>
            <ThemeArea initialTheme="dark">
                <ContactsSection contacts={friends} name="Friends" />
            </ThemeArea>
        </div>

    );
}