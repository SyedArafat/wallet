import React from 'react';

function DeleteCardModals() {
    return (
        <>
            <div className="modal error-modal fade" id="delete" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <div className="error-img">
                                <img className="img-fluid" src="assets/images/svg/delete.svg" alt="delete" />
                            </div>
                            <h3>Are you sure you want to delete this card?</h3>
                            <a href="#done-delete" className="btn theme-btn successfully w-100" data-bs-toggle="modal">Delete card</a>
                        </div>
                        <button type="button" className="btn close-btn" data-bs-dismiss="modal">
                            <i className="icon" data-feather="x"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div className="modal error-modal fade" id="done-delete" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title">Successfully Deleted</h2>
                        </div>
                        <div className="modal-body">
                            <div className="error-img">
                                <img className="img-fluid" src="assets/images/svg/delete.svg" alt="delete" />
                            </div>
                            <h3>Card has been successfully deleted.</h3>
                        </div>
                        <button type="button" className="btn close-btn" data-bs-dismiss="modal">
                            <i className="icon" data-feather="x"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteCardModals;
