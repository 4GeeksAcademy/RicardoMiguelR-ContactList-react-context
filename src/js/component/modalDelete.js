import React, { useContext } from 'react';
import { Context } from '../store/appContext';

export const DeleteModal = () => {
    
    const { store, actions } = useContext(Context);

    const handleClose = () => {
        actions.closeDeleteModal();
    };

    const handleConfirmDelete = () => {
        actions.confirmDeleteContact();
    };

    return (
        <>
            {store.showModal && (
                <div className="modal show" style={{ display: 'block'}} tabIndex="-1">
                    <div className="modal-dialog">
                        <div className="modal-content" style={{borderRadius: '30px'}}>
                            <div className="modal-header">
                                <i className="bi bi-exclamation-octagon-fill me-2" style={{fontSize: '25px'}}></i>
                                <h5 className="modal-title">Delete Contact</h5>
                                <button type="button" className="btn-close" dataBsDismiss="modal" ariaLabel="Close" onClick={handleClose}></button>
                            </div>
                            <div className="modal-body" style={{background: 'black', color: 'rgb(175, 175, 173)'}}>
                                <p>Are you about to delete this contact, are you sure?</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-warning" onClick={handleClose}>Cancel</button>
                                <button type="button" className="btn btn-danger" onClick={handleConfirmDelete}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
