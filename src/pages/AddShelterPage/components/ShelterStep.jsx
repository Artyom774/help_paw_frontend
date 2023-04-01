import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DeclarationInput from '../../../ui/DeclarationInput/DeclarationInput';
import Button from '../../../ui/Button/Button';
import useInput from '../../../hooks/useInput';
import * as regex from '../../../utils/regex';
import * as errorMessage from '../../../utils/errorMessage';

// шаг в форме добавления приюта с анкетой о самом приюте
const ShelterStep = ({
  handleBack, setShelter,
}) => {
  const [logo, setLogo] = useState();
  const startTime = useInput('', { notEmpty: true, regex: regex.TIME }, errorMessage.TIME);
  const finishTime = useInput('', { notEmpty: true, regex: regex.TIME }, errorMessage.TIME);
  const shelterName = useInput('', { notEmpty: true, maxLength: 50, regex: regex.NAME_REGEX }, errorMessage.SHELTER_NAME);
  const INN = useInput('', {
    notEmpty: true, minLength: 12, maxLength: 12, regex: regex.NUMBER,
  }, errorMessage.INN);
  const webSite = useInput('', { regex: regex.URL }, errorMessage.SHELTER_SITE);
  const telegram = useInput('', { regex: regex.TELEGRAM }, errorMessage.TELEGRAM);
  const address = useInput('', { notEmpty: true }, errorMessage.ADDRESS);
  const addressPlaceHolder = 'Москва, Профсоюзная улица, 56, стр. 1, помещение 2';
  const okGroup = useInput('', { regex: regex.URL }, errorMessage.OK);
  const vkGroup = useInput('', { regex: regex.URL }, errorMessage.VK);
  const description = useInput('', { notEmpty: true, maxLength: 1000, regex: regex.TEXT }, errorMessage.DESCRIPTION);
  const [isChecked, setIsChecked] = useState(false);
  const [formValid, setFormValid] = useState(false);

  const handleLogo = (e) => {
    const { target } = e;
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setLogo(fileReader.result);
    };
    fileReader.readAsDataURL(target.files[0]);
  };

  const handleChangeCheckbox = () => { setIsChecked(!isChecked); };

  useEffect(() => {
    if (startTime.invalidText || finishTime.invalidText || shelterName.invalidText || INN.invalidText || webSite.invalidText
      || telegram.invalidText || address.invalidText || okGroup.invalidText || vkGroup.invalidText || description.invalidText || !isChecked) {
      setFormValid(false);
    } else {
      setFormValid(true);
      setShelter({
        working_from_hour: startTime.value,
        working_to_hour: finishTime.value,
        name: shelterName.value,
        tin: INN.value,
        web_site: webSite.value,
        telegram: telegram.value,
        address: address.value,
        ok_page: okGroup.value,
        vk_page: vkGroup.value,
        description: description.value,
      });
    }
  }, [startTime.invalidText, finishTime.invalidText, shelterName.invalidText, INN.invalidText, webSite.invalidText,
    telegram.invalidText, address.invalidText, okGroup.invalidText, vkGroup.invalidText, description.invalidText]);

  return (
    <>
      <label className='add-shelter-form__caption'>Логотип приюта</label>
      <div className='add-shelter-form__photo-block'>
        <label>
          <input onChange={handleLogo} id='photo-input' type='file' name='logo' accept='.jpg, .jpeg, .png' />
          <img className={`add-shelter-form__logo ${!logo && 'add-shelter-form__logo_hidden'}`} src={logo} alt='' />
        </label>
      </div>
      <label className='add-shelter-form__caption'>Часы приюта*</label>
      <div className='add-shelter-form__clock'>
        <input
          className='add-shelter-form__time-input'
          value={startTime.value}
          onChange={(e) => { startTime.onChange(e); }}
          onBlur={startTime.onBlur}
          type='text'
          name='startTime'
          placeholder='00:00'
        />
        <p>-</p>
        <input
          className='add-shelter-form__time-input'
          value={finishTime.value}
          onChange={(e) => { finishTime.onChange(e); }}
          onBlur={finishTime.onBlur}
          type='text'
          name='finishTime'
          placeholder='00:00'
        />
      </div>
      <p className='add-shelter-form__error'>
        {(startTime.dirty || finishTime.dirty) && (startTime.invalidText ? startTime.invalidText : finishTime.invalidText)}
      </p>
      <div className='add-shelter-form__flex'>
        <div className='add-shelter-form__column'>
          <DeclarationInput caption='Название приюта*' inputState={shelterName} type='text' name='shelterName' required />
          <DeclarationInput caption='ИНН*' inputState={INN} type='number' name='INN' required />
          <DeclarationInput caption='Ссылка на сайт приюта*' inputState={webSite} type='url' name='webSite' />
          <DeclarationInput caption='Ссылка на канал приюта в &laquo;Telegram&raquo;' inputState={telegram} type='url' name='telegram' />
        </div>
        <div className='add-shelter-form__column'>
          <label className='add-shelter-form__caption'>Виды животных*</label>
          <input className='add-shelter-form__input' type='text' name='animal' required />
          <p className='add-shelter-form__error'> </p>
          <DeclarationInput caption='Адрес приюта*' inputState={address} type='text' name='address' placeholder={addressPlaceHolder} required />
          <DeclarationInput caption='Ссылка на группу приюта в &laquo;Одноклассники&raquo;' inputState={okGroup} type='url' name='okPage' />
          <DeclarationInput caption='Ссылка на группу приюта в &laquo;VK&raquo;' inputState={vkGroup} type='url' name='vkPage' />
        </div>
      </div>
      <label className='add-shelter-form__caption'>Описание приюта*</label>
      <textarea
        className='add-shelter-form__textarea'
        value={description.value}
        onChange={(e) => { description.onChange(e); }}
        onBlur={description.onBlur}
        name='description'
        required
      />
      <p className='add-shelter-form__error'>{description.dirty && description.invalidText}</p>
      <div className='register__privacy'>
        <label className='checkbox__container'>
          <input type='checkbox' className='checkbox__input' onClick={handleChangeCheckbox} />
          <span className='checkbox' />
        </label>
        <p className='register__agreement'>
          Я согласен с
          <Link className='register__privacy-link' to='/' target='_blank'> Политикой конфиденциальности </Link>
          и
          <Link className='register__privacy-link' to='/' target='_blank'> Условиями использования сервиса</Link>
        </p>
      </div>
      <div className='add-shelter-form__buttons'>
        <Button disabled={!formValid} submit>Добавить приют</Button>
        <Button theme='transparent' onClick={handleBack}>Назад</Button>
      </div>
    </>
  );
};

export default ShelterStep;
