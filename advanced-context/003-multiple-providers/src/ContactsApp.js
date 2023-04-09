import React from "react";
import { ContactsSection } from "./ContactsSection";
import { ThemeContext } from "./ThemeContext";


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
            <ThemeContext.Provider value="light">
                <ContactsSection contacts={family} name="Family" />
            </ThemeContext.Provider>
            <ThemeContext.Provider value="dark">
                <ContactsSection contacts={friends} name="Friends" />
            </ThemeContext.Provider>
        </div>

    );
}