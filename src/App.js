import React, { useEffect } from 'react';
import feather from 'feather-icons';
import Sidebar from './components/Sidebar';
import MainHeader from "./components/MainHeader";
import AccountSection from "./components/AccountSection";
import CardSummary from "./components/CardSummary";
import CategoriesSection from "./components/CategoriesSection";
import TransactionSection from "./components/TransactionSection";
import TopExpenses from "./components/TopExpenses";
import AllCards from "./components/AllCards";
import MonthlyStatistics from "./components/MonthlyStatistics";
import BottomNavbar from "./components/BottomNavbar";
// Import other components as needed

function App() {
    useEffect(() => {
        feather.replace();
    }, []);
    return (
        <div className="App">
            <MainHeader />
            <Sidebar />
            <AccountSection />
            <CardSummary />
            <CategoriesSection />
            <TransactionSection />
            {/*<ServiceSection />*/}
            <TopExpenses />
            <AllCards />
            <MonthlyStatistics />
            <BottomNavbar />
            {/* Add other components */}
        </div>
    );
}

export default App;