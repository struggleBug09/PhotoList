import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import PhotoDetailsModal from './PhotoDetailsModal';


const HomeRoute = ({
  isModalOpen,
  toggleModal,
  favorites,
  addFavorite,
  removeFavorite,
  onPhotoClick,
  selectedPhoto,
  photos,
  topics,
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar 
        favoritesCount={favorites.length}
        topics={topics}/>
        
      <PhotoList
        photos={photos}
        favorites={favorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        onPhotoClick={onPhotoClick}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          toggleModal={toggleModal}
          selectedPhoto={selectedPhoto}
          favorites={favorites}
          addFavorite={addFavorite}
          removeFavorite={removeFavorite}
        />
      )}
    </div>
  );
};

export default HomeRoute;
