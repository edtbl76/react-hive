import React from "react";
import { ContactsSection } from "./ContactsSection";


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
            <ContactsSection contacts={family} name="Family" theme="dark" />
            <ContactsSection contacts={friends} name="Friends" theme="dark" />
        </div>
    );
}