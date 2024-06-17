import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';
// Renders a favorite button for photos, handling favorite state toggle and preventing event propagation.
const PhotoFavButton = ({ isFavorited, toggleFavorite }) => {
  const handleFavClick = (e) => {
    e.stopPropagation(); 
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
