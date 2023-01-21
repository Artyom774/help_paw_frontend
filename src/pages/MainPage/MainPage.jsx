import React from 'react';
import Banner from '../../components/Banner/Banner';
import Promo from '../../components/Promo/Promo';
import SheltersOnMain from '../../components/SheltersOnMain/SheltersOnMain';
import PapersOnMain from '../../components/PapersOnMain/PapersOnMain';
import FAQ from '../../components/FAQ/FAQ';
import './MainPage.css';

const MainPage = ({ loggedIn }) => {
  return (
    <main className='main'>
      <Banner />
      <Promo />
      <SheltersOnMain loggedIn={loggedIn} />
      <PapersOnMain />
      <FAQ />
    </main>
  );
}

export default MainPage;