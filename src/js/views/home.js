import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/contact-card";
import "../../styles/home.css";

export const Home = () => {
    
    const { store } = useContext(Context);
    const { contacts } = store;

    return (
        <>
            <div className="body-home">
                <div className="title-contact text-center mt-5">
                    <h1 className="title1">Contact List</h1>
                </div>
                <div className="container bodies-contacts p-1 my-5">
                    <div className="align-center mt-5">
                        {contacts && contacts.length > 0 && contacts.map(contact => (
                            <Card key={contact.id} contact={contact} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};