import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import photosData from '../data/photos.json';

function TrendingScreen() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    setPhotos(photosData.photos);
  }, []);

  return (
    <div className="trending-screen">
      <h2>Trending Photos</h2>
      <div className="photo-grid">
        {photos.map(photo => (
          <Link to={`/photo/${photo.id}`} key={photo.id}>
            <div className="photo-card">
              <img src={photo.image} alt={photo.title} />
              <h3>{photo.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrendingScreen;
