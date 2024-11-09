// AddMoneyModal.js
import React, {useState} from 'react';
import {Modal, Button} from 'react-bootstrap';

const AddMoneyModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className="add-money theme-color" onClick={handleShow}>
                + Add Money
            </button>

            <Modal className="add-money-modal" id="add-money" show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Money</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*<Form.Group className="mb-3">*/}
                    <div className="form-group">
                        <label htmlFor="inputcards" className="form-label mb-2">Account</label>
                        <div className="d-flex gap-2">
                            <select id="inputcards" className="form-select" defaultValue="Select Account">
                                <option value="Select Account">Select Account</option>
                                <option value="Master Card">Master Card</option>
                                <option value="Visa Card">Visa Card</option>
                                <option value="RuPay Card">RuPay Card</option>
                                <option value="Business Card">Business Card</option>
                            </select>

                        </div>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Category</label>
                        <div className="d-flex gap-2">
                            <select id="inputcards" className="form-select" defaultValue="Select Category">
                                <option value="Select Category">Select Category</option>
                                <option value="Food & Drinks">Food & Drinks</option>
                                <option value="To Home">To Home</option>
                                <option value="Lending">Lending</option>
                                <option value="Grocery">Grocery</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label">Date & Time</label>
                                <div className="form-input mb-3">
                                <input type="datetime-local" className="form-control"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label">Amount</label>
                                <div className="form-input mb-3"><input type="number" className="form-control"
                                                                        placeholder="Enter Amount"/></div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label">Note</label>
                                <div className="form-input mb-3"><input type="string" className="form-control"
                                                                        placeholder="Enter Note"/></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="form-group">
                                <label className="form-label">Label</label>
                                <div className="d-flex gap-2">
                                    <select id="inputcards" className="form-select" defaultValue="Select Label">
                                        <option value="Select Label">Select Label</option>
                                        <option value="Food & Drinks">Food & Drinks</option>
                                        <option value="To Home">To Home</option>
                                        <option value="Lending">Lending</option>
                                        <option value="Grocery">Grocery</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <a href="element-modal.html" className="btn theme-btn successfully w-100">Add</a>
                </Modal.Body>
                <Button variant="secondary" onClick={handleClose} className="close-btn">
                    {/*<i className="" data-feather="x"></i> Close*/}
                    <i className={"icon"} data-feather={"x"}>X</i>

                </Button>
            </Modal>
        </>
    );
};

export default AddMoneyModal;
