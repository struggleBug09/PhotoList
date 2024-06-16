import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import TopicList from '../components/TopicList';
import '../styles/HomeRoute.scss';
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

    //Main structure of the project. Split into navigation for topics/fav badge/notifs, Photolist to render image
    //grid and info, and handling modal functionality when clicking a photo
    <div className="home-route">
      
      <TopNavigationBar 
        favoritesCount={favorites.length} 
        topics={topics}
      />
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