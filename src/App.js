import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';
import TrendingScreen from './components/TrendingScreen';
import PhotoDetail from './components/PhotoDetail';
import AddSection from './components/AddSection';
import './App.css';

function App() {
  const [photos, setPhotos] = useState([]);

  const handlePhotoAdd = (newPhoto) => {
    setPhotos(prevPhotos => [newPhoto, ...prevPhotos]);
    console.log('New photo added:', newPhoto);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/trending" element={<TrendingScreen photos={photos} />} />
        <Route path="/add" element={<AddSection onPhotoAdd={handlePhotoAdd} />} />
        <Route path="/photo/:id" element={<PhotoDetail photos={photos} />} />
      </Routes>
    </Router>
  );
}

export default App;
