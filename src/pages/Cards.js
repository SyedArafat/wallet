import React from 'react';
import Header from '../components/CardList/CardListHeader';
import CardList from '../components/CardList/CardList';
import AddCardModal from '../components/CardList/AddCardModal';
import EditCardModal from '../components/CardList/EditCardModal';
import DeleteCardModals from '../components/CardList/DeleteCardModals';

function Cards() {
    return (
        <div className="my-cards-page">
            <Header />
            <CardList />
            <AddCardModal />
            <EditCardModal />
            <DeleteCardModals />
        </div>
    );
}

export default Cards;
