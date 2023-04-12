import {
    Outlet,
    Link,
    useLoaderData,
    Form
} from "react-router-dom";
import { getContacts, createContact } from "../contacts";

const Root = () => {
    const { contacts } = useLoaderData();
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>

                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                   <Link to={`contacts/${contact.id}`}>
                                       {contact.first || contact.last ? (
                                           <>{contact.first} {contact.last}</>
                                       ) : (<i>Unknown</i>)}{" "}
                                       {contact.favorite && <span>★</span>}
                                   </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p><i>No Contacts</i></p>
                    )}
                </nav>
            </div>
            {/*
                <Outlet> is used to tell the root route WHERE we want child routes rendered
            */}
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
}

export const loader = async () => {
    const contacts = await getContacts();
    return { contacts };
}

export const action = async () => {
    const contact = await createContact();
    return { contact };
}

export default Root;