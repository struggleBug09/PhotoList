import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ isFavorited, toggleFavorite }) => {
  return (
    <div className="photo-list__fav-icon" onClick={toggleFavorite}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isFavorited} /> {/* Displays the favorited state correctly */}
      </div>
    </div>
  );
};

export default PhotoFavButton;

