import React from 'react';

function EditCardModal() {
    return (
        <div className="modal add-money-modal fade" id="edit-card" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Edit Card</h2>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="inputcard" className="form-label mb-2">Card type</label>
                            <select id="inputcard" className="form-select">
                                <option>Select card type</option>
                                <option>Master Card</option>
                                <option selected>Visa Card</option>
                                <option>RuPay Card</option>
                                <option>Business Card</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputcardnumber" className="form-label">Card Number</label>
                            <input type="text" className="form-control" id="inputcardnumber" defaultValue="**** **** **** 2563" placeholder="Enter card number" />
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <div className="form-group">
                                    <label className="form-label">Exp. Date</label>
                                    <input type="date" className="form-control" defaultValue="2024-12-31" />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="form-group">
                                    <label className="form-label">CVV</label>
                                    <input type="number" className="form-control" placeholder="Enter cvv" />
                                </div>
                            </div>
                        </div>
                        <a href="cards.html" className="btn theme-btn successfully w-100">Edit Card</a>
                    </div>
                    <button type="button" className="btn close-btn" data-bs-dismiss="modal">
                        <i className="icon" data-feather="x"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EditCardModal;
