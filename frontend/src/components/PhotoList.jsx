import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';
import photos from '../mocks/photos';

const PhotoList = ({ favorites, addFavorite, removeFavorite, onPhotoClick }) => {
  return (
    <ul className="photo-list">
      {photos.map(photo => (
        <li key={photo.id}>
          <PhotoListItem
            photo={photo}
            isFavorited={favorites.includes(photo.id)}
            toggleFavorite={() => favorites.includes(photo.id) ? removeFavorite(photo.id) : addFavorite(photo.id)}
            onPhotoClick={onPhotoClick}
          />
        </li>
      ))}
    </ul>
  );
};

export default PhotoList;
