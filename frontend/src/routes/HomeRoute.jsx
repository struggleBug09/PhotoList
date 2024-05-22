import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = ({isModalOpen, toggleModal, setSelectedPhoto, selectedPhoto}) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = photoId => {
    if (!favorites.includes(photoId)) {
      setFavorites([...favorites, photoId]);
    }
  };

  const removeFavorite = photoId => {
    setFavorites(favorites.filter(id => id !== photoId));
  };

  const handlePhotoClick = (photo) => {
    toggleModal();
    setSelectedPhoto(photo);
  };

  return (
    <div className="home-route">
      <TopNavigationBar favoritesCount={favorites.length} />
      <PhotoList
        photos={photos}
        favorites={favorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        onPhotoClick={handlePhotoClick} />
      {isModalOpen && selectedPhoto && <PhotoDetailsModal
        toggleModal={toggleModal}
        selectedPhoto={selectedPhoto}
        similarPhotos={selectedPhoto.similar_photos} />}

    </div>
  );
};

export default HomeRoute;
