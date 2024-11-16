import React from 'react';

function AddCardModal() {
    return (
        <div className="modal add-money-modal fade" id="add-card" tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title">Add Card</h2>
                    </div>
                    <div className="modal-body">
                        <div className="form-group">
                            <label htmlFor="inputcards" className="form-label mb-2">Card type</label>
                            <select id="inputcards" className="form-select">
                                <option selected>Select card type</option>
                                <option>Master Card</option>
                                <option>Visa Card</option>
                                <option>RuPay Card</option>
                                <option>Business Card</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Card Number</label>
                            <input type="text" className="form-control" placeholder="Enter card number" />
                        </div>
                        <div className="row">
                            <div className="col-7">
                                <div className="form-group">
                                    <label className="form-label">Exp. Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>
                            <div className="col-5">
                                <div className="form-group">
                                    <label className="form-label">CVV</label>
                                    <input type="number" className="form-control" placeholder="Enter cvv" />
                                </div>
                            </div>
                        </div>
                        <a href="cards.html" className="btn theme-btn successfully w-100">Add Card</a>
                    </div>
                    <button type="button" className="btn close-btn" data-bs-dismiss="modal">
                        <i className="icon" data-feather="x"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddCardModal;
