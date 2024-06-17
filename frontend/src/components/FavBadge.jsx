import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favoritesCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon selected={true} displayAlert={favoritesCount > 0} />
      {favoritesCount > 0 && (
        <div className="fav-badge__count">
          <span>{favoritesCount}</span>
        </div>
      )}
    </div>
  );
};

export default FavBadge;
