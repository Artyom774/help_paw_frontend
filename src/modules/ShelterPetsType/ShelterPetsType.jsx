import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shelterPetsApi from './api';
import './ShelterPetsType.scss';
import PetCard from '../../components/PetCard/PetCard';
import { Button } from '../../ui';
import DeleteIcon from '../../images/DeleteIcon/DeleteIcon';

const ShelterPetsType = ({ type }) => {
  const { id  } = useParams();
  const [pets, setPets] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [checkedPets, setCheckedPets] = useState([]);

  useEffect(() => {
    shelterPetsApi
      .getPetsByShelterId(id, type, 24, 0)
      .then((res) => {
        setPets(res.results);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);

  let petType;
  switch (type.toLowerCase()) {
    case 'cat':
      petType = 'Кошки';
      break;
    case 'dog':
      petType = 'Собаки';
      break;
    case 'parrot':
      petType = 'Попугаи';
      break;
    case 'hamster':
      petType = 'Хомяки';
      break;
    default:
      petType = '';
  }
  const handleButtonSelectedClick = () => {
    setIsSelected(true);
  };
  const handleButtonCancelSelectedClick = () => {
    setIsSelected(false);
    setCheckedPets([]);
  };
  const handleButtonSelectedAllClick = () => {
    setIsSelected(true);
    setIsChecked(true);
    setCheckedPets((items) => {
      return [...items, ...pets];
    });
  };
  const handleButtonCancelSelectedAllClick = () => {
    setIsSelected(false);
    setIsChecked(false);
    setCheckedPets([]);
  };
  const handleChangePet = (pet) => {
    if (!checkedPets.includes(pet)) {
      setCheckedPets((items) => {
        return [...items, pet];
      });
    } else {
      setCheckedPets (
        checkedPets.filter((checkedPet) => {
          return !(checkedPet === pet);
        })
      );
    };
  };

  // const handleButtonDeletedClick = () => {
  //   checkedPets.forEach((checkedPet) => {
  //     pets.filter((pet) => {
  //       return pet === checkedPet;
  //     });
  //   });
  // };


  return (
    <div className='shelter-pets-type'>
      <div className='shelter-pets-type__header'>
        <h2 className='shelter-pets-type__title'>{petType}</h2>
        <div className='shelter-pets-type__controls'>
          {checkedPets.length !== 0 ? (
            <Button theme='tertiary'
              className='shelter-pets-type__btn-deleted'
              // onClick={handleButtonDeletedClick}
            >
              <DeleteIcon />
              Удалить
            </Button>
          ) : null}
          {pets.length !== 0 ? (
            <>
              {!isSelected && !isChecked && <Button
                theme='tertiary'
                className='shelter-pets-type__btn-selected'
                onClick={handleButtonSelectedClick}
              >
                Выбрать
              </Button>}
              {isSelected && !isChecked && <Button
                theme='tertiary'
                className='shelter-pets-type__btn-cancel-selected'
                onClick={handleButtonCancelSelectedClick}
              >
                Отменить выбор
              </Button>}
              {!isChecked && <Button
                theme='tertiary'
                className='shelter-pets-type__btn-selected'
                onClick={handleButtonSelectedAllClick}
              >
                Выбрать все
              </Button>}
              {isChecked && <Button
                theme='tertiary'
                className='shelter-pets-type__btn-cancel-selected'
                onClick={handleButtonCancelSelectedAllClick}
              >
                Отменить выбор
              </Button>}
            </>
          ) : (
            <Button
              theme='tertiary'
            >
              Удалить
            </Button>
          )
          }
        </div>
      </div>
      {pets.length !== 0 ? (
        <ul className='shelter-pets-type__list'>
          {pets.map((pet) => {
            const isCheckedPet = checkedPets.includes(pet);
            const className = `${isSelected ? 'shelter-pets-type__input_selected' : ''} ${isCheckedPet ? 'shelter-pets-type__input_checked' : ''}`;
            return (
              <li className='shelter-pets-type__list-item' key={pet.id}>
                <input
                  className={`shelter-pets-type__input ${className}`}
                  type='checkbox'
                  onChange={() => {
                    handleChangePet(pet);
                  }}
                />
                <PetCard
                  link={!isSelected ? `/my-shelter/${id}/pets/${pet.id}` : ''}
                  id={pet.id}
                  name={pet.name}
                  age={pet.age}
                  sex={pet.sex}
                  gallery={pet.gallery}
                />
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default ShelterPetsType;