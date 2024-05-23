import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = ({ photos, favorites = [], addFavorite = () => {}, removeFavorite = () => {}, onPhotoClick = () => {} }) => {
  return (
    <div className="photo-list">
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotoListItem
            photo={photo}
            isFavorited={favorites.includes(photo.id)}
            toggleFavorite={() => favorites.includes(photo.id) ? removeFavorite(photo.id) : addFavorite(photo.id)}
            onPhotoClick={() => onPhotoClick(photo)}
          />
        </li>
      ))}
    </div>
  );
};

export default PhotoList;


