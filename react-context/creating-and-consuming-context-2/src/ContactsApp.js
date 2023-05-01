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
        <ThemeContext.Provider value="light">
            <div>
                <h1>Contacts</h1>
                <ContactsSection contacts={family} name="Family" />
                <ContactsSection contacts={friends} name="Friends" />
            </div>
        </ThemeContext.Provider>
        
    );
}