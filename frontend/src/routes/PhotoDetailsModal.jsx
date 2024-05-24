import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';
import PhotoFavButton from '../components/PhotoFavButton';

const PhotoDetailsModal = ({ toggleModal, selectedPhoto, favorites, addFavorite, removeFavorite }) => {
  if (!selectedPhoto) {
    console.error('No selected photo data available');
    return null;
  }

  const {
    urls: { regular: photoUrl } = {},
    user: {
      username,
      profile: userProfile,
      name: userName
    } = {},
    location: { city, country } = {},
    similar_photos: similarPhotos
  } = selectedPhoto;

  // Prepare similar photos array
  const similarPhotosArray = similarPhotos ? Object.values(similarPhotos) : [];

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <div className="photo-details-modal__images">
        <PhotoFavButton
          isFavorited={favorites.includes(selectedPhoto.id)}
          toggleFavorite={() => favorites.includes(selectedPhoto.id) ? removeFavorite(selectedPhoto.id) : addFavorite(selectedPhoto.id)}
        />
        <img src={photoUrl} alt={`Photo by ${username}`} className="photo-details-modal__image" />
        <div className="photo-details-modal__photographer-details">
          <img src={userProfile} alt={`${userName}'s profile`}className="photo-details-modal__photographer-profile" />
          <div className="photo-details-modal__photographer-info">
            {userName}
            <div className="photo-details-modal__photographer-location">
              <span>{city},</span>
              <span>{country}</span>
            </div>
          </div>
        </div>
      </div>
      {similarPhotosArray.length > 0 && (
        <div className="photo-details-modal__images">
          <div className="photo-details-modal__header">Similar Photos </div>
          <PhotoList
            photos={similarPhotosArray}
            favorites={favorites}
            addFavorite={addFavorite}
            removeFavorite={removeFavorite}
            onPhotoClick={() => {}}
          />
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;




