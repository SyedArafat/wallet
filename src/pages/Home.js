import React from 'react';
import CategoriesSection from "../components/CategoriesSection";
import TransactionSection from "../components/TransactionSection";
import CardSummary from "../components/CardSummary";
import Sidebar from "../components/Sidebar";
import MainHeader from "../components/MainHeader";
import TopExpenses from "../components/TopExpenses";
import AccountSection from "../components/AccountSection";
import AllCards from "../components/AllCards";
import MonthlyStatistics from "../components/MonthlyStatistics";
import BottomNavbar from "../components/BottomNavbar";

function Home() {
    return (
        <>
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
        </>
    );
}

export default Home;