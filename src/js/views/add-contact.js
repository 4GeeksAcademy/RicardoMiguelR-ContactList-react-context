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

    const saveAndSendContact = () => {
        if (contact.name.trim() === '' || contact.email.trim() === '' || contact.phone.trim() === '' || contact.address.trim() === '') {
            alert('Complete the form!')
            return;
        }
        actions.addContact(contact);
        navigatingToMain("/");
    };

    const completeTheFields = (e) => {
        if (e.key === 'Enter') {
            if (e.target.value.trim() === '') {
                alert('Complete this field!');
                e.preventDefault();
            }
        }
    };

    return (
        <div className="container-fluid mt-5" style={{ width: '40rem', background: 'grey', padding: '30px' }}>
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
            <button className="container-fluid btn btn-primary" type="button" onClick={saveAndSendContact}>Save</button>
        </div>
    );
};
