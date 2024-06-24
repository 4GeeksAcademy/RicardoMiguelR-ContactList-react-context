import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const AddContact = () => {

    const { actions } = useContext(Context);
    const navigatingToMain = useNavigate();
    const [contact, setContact] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleInputChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const saveAndSendContact = (e) => {
        if (contact.name.trim() === '' || contact.email.trim() === '' || contact.phone.trim() === '' || contact.address.trim() === '') {
            alert('There are still one or more empty fields!');
            e.preventDefault();
        } else {
            actions.addContact(contact);
            navigatingToMain("/");
        }
    };

    const completeTheFields = (e) => {
        if (e.key === 'Enter') {
            saveAndSendContact();
        }
    };

    return (
        <>
            <div className="add-contact">
                <div className="title-add text-center mt-5">
                    <h1 className="title2">Add a contact</h1>
                </div>
                <div className="container body-addContact mt-5">
                    <div className="form-floating mb-4">
                        <input type="text" className="form-control" name="name" onKeyDown={completeTheFields} onChange={handleInputChange} value={contact.name} placeholder="Enter Full Name" />
                        <label htmlFor="floatingInput">Full Name</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="email" className="form-control" name="email" onKeyDown={completeTheFields} onChange={handleInputChange} value={contact.email} placeholder="Enter Email" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="text" className="form-control" name="phone" onKeyDown={completeTheFields} onChange={handleInputChange} value={contact.phone} placeholder="Enter Phone" />
                        <label htmlFor="floatingInput">Phone</label>
                    </div>
                    <div className="form-floating mb-4">
                        <input type="text" className="form-control" name="address" onKeyDown={completeTheFields} onChange={handleInputChange} value={contact.address} placeholder="Enter Address" />
                        <label htmlFor="floatingInput">Address</label>
                    </div>
                    <button className="container-fluid button-save" type="button" onClick={saveAndSendContact}>Save</button>
                </div>
            </div>
        </>
    );
};
