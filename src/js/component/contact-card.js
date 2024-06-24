import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Card = ({ contact }) => {

    const { actions } = useContext(Context);
    const [editedContact, setEditedContact] = useState({ ...contact });
    const [editing, setEditing] = useState(false);

    const handleInputChange = (e) => {
        setEditedContact({ ...editedContact, [e.target.name]: e.target.value });
    };

    const handleEdit = () => {
        actions.editContact(contact.id, editedContact);
        setEditing(false);
    }

    const handleDelete = () => {
        actions.setConfirmDeleteContact(contact);
    }

    return (
        <>
            <div className="card mb-3 mb-5 m-auto">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="https://livewallpapers4free.com/wp-content/uploads/2023/11/thumb-25.jpg" className="img-card" />
                    </div>
                    <div className="col-md-8">
                        <div className="container-modify">
                            {!editing ? (
                                <button type="button" className="btn btn-secondary rounded-circle" onClick={() => setEditing(true)}>
                                    <i className="bi bi-pencil-fill"></i>
                                </button>
                            ) : (
                                <button type="button" className="btn btn-success" onClick={handleEdit}>
                                    Save
                                </button>
                            )}
                        </div>
                        <div className="container-delete">
                            <button type="button" className="btn btn-secondary rounded-circle" onClick={handleDelete}>
                                <i className="bi bi-trash-fill"></i>
                            </button>
                        </div>
                        <div className="card-body">
                            <h4 className="card-name ms-1">{editing ? (
                                <input type="text" name="name" value={editedContact.name} onChange={handleInputChange} />
                            ) : (
                                contact.name
                            )}</h4>
                            <p className="card-adress ms-1">
                                <i className="bi bi-geo-alt-fill" style={{ color: 'rgb(163, 228, 247)' }}></i> {editing ? (
                                    <input type="text" name="address" value={editedContact.address} onChange={handleInputChange} />
                                ) : (
                                    contact.address
                                )}</p>
                            <p className="card-phone ms-1">
                                <i className="bi bi-telephone-fill" style={{ color: 'rgb(163, 228, 247)' }}></i> {editing ? (
                                    <input type="text" name="phone" value={editedContact.phone} onChange={handleInputChange} />
                                ) : (
                                    contact.phone
                                )}</p>
                            <p className="card-email ms-1">
                                <i className="bi bi-envelope-at-fill" style={{ color: 'rgb(163, 228, 247)' }}></i> {editing ? (
                                    <input type="text" name="email" value={editedContact.email} onChange={handleInputChange} />
                                ) : (
                                    contact.email
                                )}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
