import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import MainPage from '../../pages/MainPage/MainPage';
import MapPage from '../../pages/MapPage/MapPage';
import ShelterListPage from '../../pages/ShelterListPage/ShelterListPage';
import ShelterPage from '../../pages/ShelterPage/ShelterPage';
import PapersPage from '../../pages/PapersPage/PapersPage';
import PaperPage from '../../pages/PaperPage/PaperPage';
import NewsPage from '../../pages/NewsPage/NewsPage';
import NewPage from '../../pages/NewPage/NewPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage';
import './App.css';

const App = (props) => {
  const [loggedIn, setLoggedIn] = React.useState(false); // пользователь вошёл в учётную запись?

  return (
    <div className="page">
      <Header
        loggedIn={loggedIn} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/shelter-list" element={<ShelterListPage />} />
        <Route path="/shelters/:id" element={<ShelterPage />} />
        <Route path="/papers" element={<PapersPage />} />
        <Route path="/papers/:id" element={<PaperPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewPage />} />
        <Route path="/sign-in" element={
          <ProtectedRoute loggedIn={!loggedIn} component={LoginPage} />
          }/>
        <Route path="/sign-up" element={
          <ProtectedRoute loggedIn={!loggedIn} component={RegisterPage} />
          }/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
