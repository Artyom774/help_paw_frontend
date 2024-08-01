import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link, Outlet } from 'react-router-dom';
import shelterApi from './api';
import './ShelterPetsPage.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import LeftArrowIcon from '../../images/LeftArrowIcon/LeftArrowIcon';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const ShelterPetsPage = () => {
  const { id } = useParams();
  const currentUser = useContext(CurrentUserContext);
  const isOwner = currentUser?.own_shelter?.id === Number(id);
  const [shelter, setShelter] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [countPets, setCountPets] = useState(0);

  useEffect(() => {
    shelterApi
      .getShelterById(id) // загрузка инфо о приюте
      .then((res) => {
        setIsLoading(false);
        setShelter(res);
        setCountPets(res.count_pets);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <MainContainer>
      <main className='main'>
        <section className='shelter-pets'>
          <Link to={-1} className='shelter-pets__back-profile-button'>
            <LeftArrowIcon />
            <span>Вернуться назад</span>
          </Link>
          <Outlet context={{ shelter, isOwner, isLoading, countPets, setCountPets }} />
        </section>
      </main>
    </MainContainer>
  );
};

export default ShelterPetsPage;