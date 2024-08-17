import React, { useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import './Header.scss';
import MainContainer from '../../components/MainContainer/MainContainer';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import ProfilePopup from '../../components/ProfilePopup/ProfilePopup';
import MenuLink from '../../ui/MenuLink/MenuLink';
import Paw from './svg/Paw';
import CurrentUserContext from '../../contexts/CurrentUserContext';

const Header = () => {
  const { username } = useContext(CurrentUserContext);
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);

  const openProfilePopup = () => {
    setProfilePopupOpen(true);
  };

  const closeProfilePopup = () => {
    setProfilePopupOpen(false);
  };

  const isScreenWide = useMediaQuery({
    minWidth: 1200,
  });

  const isElementHidden = isScreenWide ? '' : 'menu_hidden';

  return (
    <MainContainer theme='additional'>
      <header className='header'>
        <BurgerMenu />

        <Link to='/'>
          <Paw className='header__logo' />
        </Link>

        <nav className={`menu menu_items_links ${isElementHidden}`}>
          <MenuLink url='/papers'>Полезные статьи</MenuLink>
          <MenuLink url='/shelters'>Карта приютов</MenuLink>
          <MenuLink url='/news'>Новости</MenuLink>
        </nav>
        <nav className='menu'>
          {!username && (
            <NavLink className='menu__sign menu__sign_in' to='/sign-in'>
              Вход
            </NavLink>
          )}
          {isScreenWide && !username && (
            <NavLink className='menu__sign menu__sign_up ' to='/sign-up'>
              Регистрация
            </NavLink>
          )}

          {username && <button className='menu__profile' type='button' onClick={openProfilePopup} />}
        </nav>

        <ProfilePopup isOpen={profilePopupOpen} closeProfilePopup={closeProfilePopup} />
      </header>
    </MainContainer>
  );
};

export default Header;
