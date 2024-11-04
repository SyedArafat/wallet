// AddMoneyModal.js
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const AddMoneyModal = () => {
    const [show, setShow] = useState(false);
    const [selectedCard, setSelectedCard] = useState("**** **** **** 1566 - Saving a/c");
    const [amount, setAmount] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDeposit = () => {
        // Handle deposit action
        console.log("Depositing:", amount, "from", selectedCard);
        setShow(false);
    };

    return (
        <>
            <button className="add-money theme-color" onClick={handleShow}>
                + Add Money
            </button>
            {/*<Button variant="primary" onClick={handleShow}>*/}
            {/*    Add Money*/}
            {/*</Button>*/}

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Add Money</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3">
                        <Form.Label>From</Form.Label>
                        <Form.Select
                            value={selectedCard}
                            onChange={(e) => setSelectedCard(e.target.value)}
                        >
                            <option>**** **** **** 1566 - Saving a/c</option>
                            <option>**** **** **** 9876 - Current a/c</option>
                            <option>**** **** **** 1234 - Business a/c</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        onClick={handleDeposit}
                        className="w-100"
                    >
                        Deposit
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AddMoneyModal;
