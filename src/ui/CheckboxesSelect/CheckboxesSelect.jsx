/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import './CheckboxesSelect.css';
import Arrow from './svg/Arrow';

const CheckboxesSelect = ({ caption }) => {
  const [items, setItems] = useState([]);
  const [openedSelect, setOpenedSelect] = useState(false);
  const catType = { caption: 'Кошки', name: 'cats' };
  const [isCat, setCat] = useState(false);
  const dogType = { caption: 'Собаки', name: 'dogs' };
  const [isDog, setDog] = useState(false);
  const parrotType = { caption: 'Попугаи', name: 'parrots' };
  const [isParrot, setParrot] = useState(false);
  const hamsterType = { caption: 'Хомяки', name: 'hamsters' };
  const [isHamster, setHamster] = useState(false);

  const handleCheckbox = (e) => {
    switch (e.target.name) {
    case catType.name:
      setCat(e.target.checked);
      break;
    case dogType.name:
      setDog(e.target.checked);
      break;
    case parrotType.name:
      setParrot(e.target.checked);
      break;
    case hamsterType.name:
      setHamster(e.target.checked);
      break;
    default:
      break;
    }
  };

  useEffect(() => {
    setItems([isCat && catType.caption, isDog && dogType.caption, isParrot && parrotType.caption, isHamster && hamsterType.caption]);
  }, [isCat, isDog, isParrot, isHamster]);

  return (
    <li className='checkboxes-select'>
      <label className='checkboxes-select__caption'>{caption}</label>
      <div className='checkboxes-select__multiselect'>
        <div className='checkboxes-select__selectBox' onClick={() => { setOpenedSelect(!openedSelect); }}>
          <ul className='checkboxes-select__items'>
            {items && items.map((item, index) => {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <li className='checkboxes-select__item' key={index}>
                  <p className='checkboxes-select__item-text'>{item}</p>
                  <button className='checkboxes-select__delete' type='button' />
                </li>
              );
            })}
          </ul>
          <Arrow openedSelect={openedSelect} />
        </div>
        <div className={`checkboxes-select__checkboxes ${openedSelect && 'checkboxes-select__checkboxes_opened'}`}>
          <label className='checkboxes-select__check-label' htmlFor={catType.name}>
            <input
              className='checkboxes-select__checkbox'
              type='checkbox'
              name={catType.name}
              id={catType.name}
              onChange={handleCheckbox}
            />
            {catType.caption}
          </label>
          <label className='checkboxes-select__check-label' htmlFor={dogType.name}>
            <input
              className='checkboxes-select__checkbox'
              type='checkbox'
              name={dogType.name}
              id={dogType.name}
              onChange={handleCheckbox}
            />
            {dogType.caption}
          </label>
          <label className='checkboxes-select__check-label' htmlFor={parrotType.name}>
            <input
              className='checkboxes-select__checkbox'
              type='checkbox'
              name={parrotType.name}
              id={parrotType.name}
              onChange={handleCheckbox}
            />
            {parrotType.caption}
          </label>
          <label className='checkboxes-select__check-label' htmlFor={hamsterType.name}>
            <input
              className='checkboxes-select__checkbox'
              type='checkbox'
              name={hamsterType.name}
              id={hamsterType.name}
              onChange={handleCheckbox}
            />
            {hamsterType.caption}
          </label>
        </div>
      </div>
      <p className='checkboxes-select__error'> </p>
    </li>
  );
};

export default CheckboxesSelect;
