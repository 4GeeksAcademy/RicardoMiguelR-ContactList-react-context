import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/contactCard";
import "../../styles/home.css";

export const Home = () => {
    const { store } = useContext(Context);
    const { contacts } = store;

    return (
        <div className="align-center mt-5">
            {contacts && contacts.length > 0 && contacts.map(contact => (
                <Card key={contact.id} contact={contact} />
            ))}
        </div>
    );
};