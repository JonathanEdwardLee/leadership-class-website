import React from 'react';
import NewsSection from '../components/NewsSection';
import heroImage from '../images/LC_band_photo.jpg';
import logoImage from '../images/mushroom.lady.sticker.1000.png';

function MainPage() {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        {/* Hero content */}
      </div>
      <NewsSection />
      <div className="content">
        <img src={logoImage} alt="Mushroom Lady Leadership Class Logo" className="band-logo" />
      </div>
    </div>
  );
}

export default MainPage;
