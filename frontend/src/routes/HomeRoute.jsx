import React, { useState } from 'react';
import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = () => {
  const [favorites, setFavorites] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addFavorite = photoId => {
    if (!favorites.includes(photoId)) {
      setFavorites([...favorites, photoId]);
    }
  };

  const removeFavorite = photoId => {
    setFavorites(favorites.filter(id => id !== photoId));
  };
  
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="home-route">
      <TopNavigationBar favoritesCount={favorites.length} />
      <PhotoList photos={photos} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} onPhotoClick={toggleModal} />
      {isModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default HomeRoute;
