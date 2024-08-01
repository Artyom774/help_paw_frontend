import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import './App.scss';
import ProtectedRoute from './ProtectedRoute';
import Header from '../../modules/Header/Header';
import Footer from '../../modules/Footer/Footer';
import MainPage from '../MainPage/MainPage';
import MapPage from '../MapPage/MapPage';
import SheltersListPage from '../SheltersListPage/SheltersListPage';
import ShelterPage from '../ShelterPage/ShelterPage';
import * as shelterModules from '../ShelterPage/modules';
import AddShelterPage from '../AddShelterPage/AddShelterPage';
import PapersPage from '../PapersPage/PapersPage';
import PaperPage from '../PaperPage/PaperPage';
import NewsPage from '../NewsPage/NewsPage';
import NewPage from '../NewPage/NewPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import PasswordRecovery from '../PasswordRecovery/PasswordRecovery';
import NewPassword from '../NewPassword/NewPassword';
import SignUpConfirm from '../SignUpConfirm/SignUpConfirm';
import ProfilePage from '../ProfilePage/ProfilePage';
import EditProfilePage from '../EditProfilePage/EditProfilePage';
import SignOutPage from '../SignOutPage/SignOutPage';
import ChangePasswordPage from '../ChangePasswordPage/ChangePasswordPage';
import ActivateUserPage from '../ActivateUserPage/ActivateUserPage';
import PrivacyPolicyPage from '../PrivacyPolicyPage/PrivacyPolicyPage';
import TermsPage from '../TermsPage/TermsPage';
import ActivateEmailPage from '../ActivateEmailPage/ActivateEmailPage';
import InfoTooltip from '../../components/InfoTooltip/InfoTooltip';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import * as auth from './api/auth';
import imageSuccess from '../../images/icons/ic_success.svg';
import imageError from '../../images/icons/ic_error.svg';
import getUserInfo from './api/userApi';
import AppContext from '../../contexts/App';
import MyShelterPage from '../MyShelterPage/MyShelterPage';
import MyShelterEdit from '../../modules/MySheelterEdit/MyShelterEdit';
import AddNewsPage from '../AddNewsPage/AddNewsPage';
import ConfirmPopup from '../../components/ConfirmPopup/ConfirmPopup';
import ShelterPetsPage from '../ShelterPetsPage/ShelterPetsPage';
import ShelterAllPets from '../../modules/shelterAllPets/ShelterAllPets';

const App = () => {
  const navigate = useNavigate();

  const [app] = useState({});
  const [loggedIn, setLoggedIn] = useState(false); // пользователь вошёл в учётную запись?
  const [currentUser, setCurrentUser] = useState({ username: '', email: '', id: '', donations_sum: '' });

  const [infoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [infoTooltipImage, setInfoTooltipImage] = useState(null);
  const [message, setMessage] = useState('');

  const [confirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [confirmBtnText, setConfirmBtnText] = useState('');
  const [rejectBtnText, setRejectBtnText] = useState('');
  const [iconBasket, setIconBasket] = useState(false);

  const [success, setSuccess] = useState(false);

  const closeInfoTooltip = () => {
    setInfoTooltipOpen(false);
    setInfoTooltipImage(null);
  };

  const closeConfirmPopup = () => {
    setConfirmPopupOpen(false);
    setTimeout(() => {
      setQuestion('');
      setDescription('');
      setConfirmBtnText('');
      setRejectBtnText('');
    }, 1000);
  };

  const handleSignOut = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser({ username: '', email: '', id: '', donations_sum: '' });
    navigate('/');
  };

  function tokenCheck() {
    const token = localStorage.getItem('access');
    if (token) {
      getUserInfo(token)
        .then((res) => {
          setCurrentUser(res);
          setLoggedIn(true);
        })
        .catch(() => {
          setLoggedIn(false);
          handleSignOut();
        });
    }
  }

  useEffect(() => {
    tokenCheck();
  }, []);

  const handleRegister = ({ username, password, email }) => {
    auth
      .register(username, password, email)
      .then(() => {
        setInfoTooltipImage(imageSuccess);
        setMessage('Спасибо за регистрацию! Для активации аккаунта перейдите по ссылке, отправленной на вашу почту.');
        setSuccess(true);
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 15000);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch(() => {
        setInfoTooltipImage(imageError);
        setMessage('Что-то пошло не так! Попробуйте ещё раз.');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 15000);
      });
  };

  const handleLogin = ({ password, email }) => {
    auth
      .login({ password, email })
      .then((res) => {
        setLoggedIn(true);
        setSuccess(true);
        localStorage.setItem('access', res.access);
        localStorage.setItem('refresh', res.refresh);
        tokenCheck();

        setInfoTooltipImage(imageSuccess);
        setMessage('Добро пожаловать на сайт!');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 15000);
        setTimeout(() => {
          navigate('/');
        }, 1000);
      })
      .catch(() => {
        setInfoTooltipImage(imageError);
        setMessage('Вы ввели неверный e-mail или пароль!');
        setInfoTooltipOpen(true);
        setTimeout(closeInfoTooltip, 15000);
      });
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <AppContext.Provider value={app}>
        <div className='page'>
          <Header />
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/shelters'>
              <Route index element={<MapPage />} />
              <Route path='list' element={<Navigate to='/shelters/list/red' replace />} />
              <Route path='list/:color' element={<SheltersListPage />} />
              <Route path=':id' element={<ShelterPage />}>
                <Route path='about' element={<shelterModules.AboutShelter />} />
                <Route path='how-to-help' element={<shelterModules.HelpToShelter />} />
                <Route path='news' element={<shelterModules.ShelterNews />} />
                <Route path='pets' element={<shelterModules.ShelterPets />} />
                <Route path='pets/type/:type' element={<shelterModules.ShelterSamePets />} />
                <Route path='pets/:petId' element={<shelterModules.PetModule />} />
                <Route path='vacancies' element={<shelterModules.ShelterVacancies />} />
              </Route>
            </Route>

            <Route
              path='/add-shelter'
              element={
                <ProtectedRoute
                  condition={loggedIn}
                  component={AddShelterPage}
                  openPopup={setInfoTooltipOpen}
                  setPopupImage={setInfoTooltipImage}
                  setMessage={setMessage}
                />
              }
            />
            <Route
              path='/my-shelter/add-news'
              element={<ProtectedRoute condition={loggedIn} component={AddNewsPage}
                openInfoPopup={setInfoTooltipOpen}
                setInfoPopupImage={setInfoTooltipImage}
                setMessageInfoPopup={setMessage}
                setConfirmPopupOpen={setConfirmPopupOpen}
                setQuestion={setQuestion}
                setDescription={setDescription}
                setConfirmBtnText={setConfirmBtnText}
                setRejectBtnText={setRejectBtnText}
                setIconBasket={setIconBasket}
              />}
            />

            <Route path='/papers' element={<PapersPage />} />
            <Route path='/papers/:id' element={<PaperPage />} />
            <Route path='/news' element={<NewsPage />} />
            <Route path='/news/:id' element={<NewPage />} />

            <Route path='/privacy' element={<PrivacyPolicyPage />} />
            <Route path='/terms' element={<TermsPage />} />

            <Route exact path='/sign-in' element={<ProtectedRoute condition={!loggedIn} component={LoginPage} onLogin={handleLogin} isSuccess={success} />} />
            <Route
              exact
              path='/sign-up'
              element={<ProtectedRoute condition={!loggedIn} component={RegisterPage} onRegister={handleRegister} isSuccess={success} />}
            />
            <Route exact path='/sign-up/confirm' element={<ProtectedRoute condition={!loggedIn} component={SignUpConfirm} />} />
            <Route exact path='/password-recovery' element={<ProtectedRoute condition={!loggedIn} component={PasswordRecovery} />} />

            <Route exact path='/activate/:uid/:token/' element={<ActivateUserPage />} />
            <Route exact path='/password-reset/:uid/:token/' element={<NewPassword />} />
            <Route exact path='/email-reset/:uid/:token/:new_email' element={<ActivateEmailPage onUpdateCurrentUser={setCurrentUser} />} />

            <Route path='/profile' element={<ProtectedRoute condition={loggedIn} component={ProfilePage} />} />
            <Route path='/profile/my-shelter' element={<ProtectedRoute condition={loggedIn} component={MyShelterPage} />}>
              <Route index element={<ProtectedRoute condition={loggedIn} component={shelterModules.AboutShelter} />} />
              <Route path='edit' element={<ProtectedRoute condition={loggedIn} component={MyShelterEdit} />} />
            </Route>
            <Route path='/profile/edit' element={<ProtectedRoute condition={loggedIn} component={EditProfilePage} onUpdateCurrentUser={setCurrentUser} />} />
            <Route path='/profile/sign-out' element={<ProtectedRoute condition={loggedIn} component={SignOutPage} onSignOut={handleSignOut} />} />
            <Route path='/profile/edit/password' element={<ProtectedRoute condition={loggedIn} component={ChangePasswordPage} />} />
            <Route path='/my-shelter/:id' element={<ProtectedRoute condition={loggedIn} component={ShelterPetsPage} />}>
              <Route path='all-pets' element={<ProtectedRoute condition={loggedIn} component={ShelterAllPets} />} />
              <Route path='pets/:petId' element={<ProtectedRoute condition={loggedIn} component={shelterModules.PetModule} />} />
            </Route>


            <Route path='*' element={<NotFoundPage />} />
          </Routes>
          <Footer />

          <InfoTooltip isOpen={infoTooltipOpen} image={infoTooltipImage} message={message} onClose={closeInfoTooltip} />
          <ConfirmPopup
            isOpen={confirmPopupOpen}
            question={question}
            desc={description}
            confirmBtnText={confirmBtnText}
            rejectBtnText={rejectBtnText}
            onClose={closeConfirmPopup}
            iconBasket={iconBasket}
          />
        </div>
      </AppContext.Provider>
    </CurrentUserContext.Provider>
  );
};

export default App;
