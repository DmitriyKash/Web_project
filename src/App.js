import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import InstructionsPage from './components/InstructionsPage';
import GalleryPage from './components/GalleryPage';
import ReviewsPage from './components/ReviewsPage';
import BlogPage from './components/BlogPage';
import RegistrationForm from './components/RegistrationForm';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import Notifications from './components/Notifications';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <nav style={{ paddingBottom: '10px', borderBottom: '1px solid #ccc' }}>
            <Link to="/" style={{ marginRight: '10px' }}>Головна</Link>|
            <Link to="/instructions" style={{ margin: '0 10px' }}>Інструкції</Link>|
            <Link to="/gallery" style={{ margin: '0 10px' }}>Галерея</Link>|
            <Link to="/reviews" style={{ margin: '0 10px' }}>Відгуки</Link>|
            <Link to="/blog" style={{ margin: '0 10px' }}>Блог</Link>|
            <Link to="/register" style={{ margin: '0 10px' }}>Реєстрація</Link>|
            <Link to="/profile" style={{ margin: '0 10px' }}>Профіль</Link>|
            <Link to="/edit-profile" style={{ margin: '0 10px' }}>Редагувати Профіль</Link>|
            <Link to="/notifications" style={{ margin: '0 10px' }}>Сповіщення</Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/instructions" element={<InstructionsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/reviews" element={<ReviewsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;