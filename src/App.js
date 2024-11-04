import React, { useEffect } from 'react';
import feather from 'feather-icons';
import Sidebar from './components/Sidebar';
import MainHeader from "./components/MainHeader";
import AccountSection from "./components/AccountSection";
import CardSummary from "./components/CardSummary";
import CategoriesSection from "./components/CategoriesSection";
import TransactionSection from "./components/TransactionSection";
import ServiceSection from "./components/ServiceSection";
import TopExpenses from "./components/TopExpenses";
// Import other components as needed

function App() {
    useEffect(() => {
        feather.replace(); // Replace all icons with Feather icons after rendering
    }, []);
    return (
        <div className="App">
            <MainHeader />
            <Sidebar />
            <AccountSection />
            <CardSummary />
            <CategoriesSection />
            <TransactionSection />
            <ServiceSection />
            <TopExpenses />
            {/* Add other components */}
        </div>
    );
}

export default App;