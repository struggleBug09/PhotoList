import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isFavorited, toggleFavorite }) => {
  const handleFavClick = (e) => {
    e.stopPropagation(); // Prevents modal from opening when clicking fave on homescreen
    toggleFavorite();
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleFavClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
