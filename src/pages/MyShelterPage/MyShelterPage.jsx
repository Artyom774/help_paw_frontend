import React, { useState, useEffect, useContext } from 'react';
import './MyShelterPage.scss';
import { Outlet, Link, useLocation } from 'react-router-dom';
import MainContainer from '../../components/MainContainer/MainContainer';
import LeftArrowIcon from '../../images/LeftArrowIcon/LeftArrowIcon';
import myShelterApi from './api';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const MyShelterPage = () => {
  const curentUser = useContext(CurrentUserContext);
  const mySheltersId = curentUser.own_shelter.id;
  const [shelter, setShelter] = useState({});
  const isOwner = true;
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const contentText = {
    GO_TO_BACK: 'Вернуться назад',
    BACK_TO_PROFILE: 'Вернуться в Личный Кабинет',
  };

  let linkTo;
  let linkText;
  if (location.pathname.includes('edit')) {
    linkTo = -1;
    linkText = contentText.GO_TO_BACK;
  } else {
    linkTo = '/profile';
    linkText = contentText.BACK_TO_PROFILE;
  }



  useEffect(() => {
    myShelterApi.getShelterById(mySheltersId)
      .then((res) => {
        setShelter(res);
        setIsLoading(false);
      })
      .catch((err) => {
        throw new Error(err);
      });}, [mySheltersId]);


  return (
    <MainContainer>
      <main className='main'>
        <section className='my-shelter-section'>
          <Link to={linkTo} className='my-shelter-section__back-profile-button'>
            <LeftArrowIcon /><span>{linkText}</span>
          </Link>
          <Outlet context={{ shelter, isOwner, isLoading }} />
        </section>
      </main>
    </MainContainer>
  );
};

export default MyShelterPage;
