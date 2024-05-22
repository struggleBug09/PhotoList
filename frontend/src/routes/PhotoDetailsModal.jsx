import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ toggleModal, selectedPhoto }) => {
  if (!selectedPhoto) {
    console.error('No selected photo data available');
    return null;
  }

  const similarPhotosArray = selectedPhoto.similar_photos ? Object.values(selectedPhoto.similar_photos) : [];

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={toggleModal}>
        <img src={closeSymbol} alt="Close" />
      </button>
      <img
        src={selectedPhoto.urls.regular}
        alt={`Photo by ${selectedPhoto.user.username}`}
        className="photo-details-modal__image"
      />
      <div className="photo-details-modal__photographer-details">
        {/* Might have to hard code photographer details if needed*/}
      </div>

      {similarPhotosArray.length > 0 && (
        <div className="photo-details-modal__images">
          <h2>Similar Photos:</h2>
          <PhotoList photos={similarPhotosArray} />
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;






