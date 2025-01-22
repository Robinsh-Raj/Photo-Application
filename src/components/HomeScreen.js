import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>PhotoGram</h1>
        <div className="user-profile">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="profile" />
        </div>
      </header>

      <div className="navigation-cards">
        <Link to="/trending" className="nav-card trending">
          <div className="card-icon">🔥</div>
          <h2>Trending</h2>
          <p>See what's hot right now</p>
        </Link>

        <Link to="/popular" className="nav-card popular">
          <div className="card-icon">⭐</div>
          <h2>Popular</h2>
          <p>Most loved photos</p>
        </Link>

        <Link to="/add" className="nav-card add-new">
          <div className="card-icon">📸</div>
          <h2>Add Photo</h2>
          <p>Share your moments</p>
        </Link>
      </div>

      
    </div>
  );
}

export default HomeScreen;
