import React, { useEffect } from 'react';
import feather from 'feather-icons';
import { Accordion } from 'react-bootstrap';
import {Link} from "react-router-dom";

function HelpCenter() {
    useEffect(() => {
        // Replace icons with Feather icons after rendering
        feather.replace();
    }, []);

    return (
        <div className="help-center-page">
            {/* Header */}
            <div className="auth-header">
                <div className="help-head d-flex">
                    <Link to="/profile">
                        <i className="back-btn" data-feather="arrow-left"></i>
                    </Link>
                    <h2>Help Center</h2>
                </div>
                <div className="head-img text-center">
                    <img className="img-fluid img2" src="assets/images/authentication/help.svg" alt="Help Center" />
                </div>
            </div>

            {/* Help Section */}
            <form className="auth-form" target="_blank">
                <div className="custom-container">
                    <div className="help-center">
                        <h2 className="fw-semibold">What issues are you facing?</h2>
                        <Accordion defaultActiveKey="0" className="help-accordion">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>What is a PWA Template</Accordion.Header>
                                <Accordion.Body>
                                    A PWA (Progressive Web App) template is a pre-designed starting point or framework that helps developers build Progressive Web Applications more efficiently. A PWA is a type of web application that combines the features of a website and a mobile app, providing a native-like experience to users across different devices and platforms.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>What is Cryptocurrency</Accordion.Header>
                                <Accordion.Body>
                                    Cryptocurrency, often referred to as crypto, is a digital or virtual form of currency that uses cryptography for security and operates independently of a central bank. Cryptocurrencies leverage blockchain technology, a decentralized ledger system, to record transactions and control the creation of new units.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>How to make a payment through Crypto?</Accordion.Header>
                                <Accordion.Body>
                                    To make a payment through cryptocurrency, you'll generally need the following steps:
                                    <ul>
                                        <li>Choose a Cryptocurrency: Decide which cryptocurrency you want to use for the payment. Bitcoin (BTC) is the most widely accepted, but other popular options include Ethereum (ETH), Litecoin (LTC), and Ripple (XRP), among others.</li>
                                        <li>Choose a Wallet: Select a digital wallet that supports the cryptocurrency you're using. Wallets can be software-based (mobile or desktop apps) or hardware devices specifically designed for cryptocurrency storage.</li>
                                        <li>Initiate the Transaction: Open your chosen wallet and find the option to send or transfer funds. Enter the recipient's wallet address and the payment amount.</li>
                                        <li>Confirm Transaction Details: Some wallets may ask you to review the transaction details and confirm once again. This step ensures you're sending the correct amount to the right recipient.</li>
                                        <li>Pay Transaction Fees: Cryptocurrency transactions often incur fees, which can vary depending on the network congestion and the chosen cryptocurrency. The wallet will typically provide an option to adjust the fee or choose from preset options. Higher fees generally result in faster confirmations.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How to utilize coin in cryptocurrency</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Choose a Wallet: Select a digital wallet that supports the specific coin you want to utilize.</li>
                                        <li>Obtain the Coin: You need to acquire the coin through a cryptocurrency exchange or a peer-to-peer transaction.</li>
                                        <li>Store the Coin: Once you have obtained the coin, transfer it to your chosen wallet.</li>
                                        <li>Secure your Wallet: It's crucial to keep your wallet secure to protect your coins.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="4">
                                <Accordion.Header>How will the money be transferred to my wallet?</Accordion.Header>
                                <Accordion.Body>
                                    <ul>
                                        <li>Bank Transfer: If your wallet is linked to your bank account, you can typically transfer money from your bank account directly to your wallet.</li>
                                        <li>Credit/Debit Card: Many wallet services allow you to add funds to your wallet using a credit or debit card.</li>
                                        <li>Mobile Payment Apps: Some wallets are integrated with popular mobile payment apps like Paytm, Google Pay, PayPal, Apple Pay.</li>
                                        <li>Cryptocurrency Transfer: If your wallet supports cryptocurrencies, you can receive funds by providing the sender with your wallet address or QR code.</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default HelpCenter;
