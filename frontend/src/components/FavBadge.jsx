import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favoritesCount }) => {
  return (
    
    //Renders FavBadge. Also keeps count of notification count that is not neccessary but nice to have
    <div className='fav-badge'>
      <FavIcon selected={favoritesCount > 0} />
      {favoritesCount > 0 && (
        <div className="fav-badge__count">
          <span>{favoritesCount}</span>
        </div>
      )}
    </div>
  );
};


export default FavBadge;
