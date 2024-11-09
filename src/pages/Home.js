import React from 'react';
import CategoriesSection from "../components/Home/CategoriesSection";
import TransactionSection from "../components/Home/TransactionSection";
import CardSummary from "../components/Home/CardSummary";
import Sidebar from "../components/Home/Sidebar";
import MainHeader from "../components/Home/MainHeader";
import TopExpenses from "../components/Home/TopExpenses";
import AccountSection from "../components/Home/AccountSection";
import AllCards from "../components/Home/AllCards";
import MonthlyStatistics from "../components/Home/MonthlyStatistics";
import BottomNavbar from "../components/Home/BottomNavbar";

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