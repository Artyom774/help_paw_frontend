import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Button from '../../ui/Button/Button';
import ShelterPetsType from '../ShelterPetsType/ShelterPetsType';
import './ShelterAllPets.scss';

const ShelterAllPets = () => {
  const { shelter, countPets, setCountPets, isLoading } = useOutletContext();

  if (isLoading) {
    return null;
  }

  return (
    <section className='shelter-all-pets'>
      <div className='shelter-all-pets__header'>
        <h1 className='shelter-all-pets__title'>Питомцы приюта {shelter.name}</h1>
        <Button className='shelter-all-pets__add-pets-button'>Добавить питомца</Button>
      </div>
      <p className='shelter-all-pets__count-pets'>Всего питомцев: <span>{countPets}</span></p>
      {shelter.animal_types && shelter.animal_types.length ? (
        <>
          {shelter.animal_types.map((type) => {
            return (
              <ShelterPetsType type={type} key={type} countPets={countPets} setCountPets={setCountPets} />
            );
          })}
          <Button className='shelter-all-pets__load-more-button' theme='transparent'>
            Загрузить ещё
          </Button>
        </>
      ) : (
        <p className='standard-font_type_body'>На данный момент в приюте животных нет</p>
      )}
    </section>
  );
};

export default ShelterAllPets;