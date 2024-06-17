import React from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
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
  onTopicSelect, 
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar 
        favoritesCount={favorites.length} 
        topics={topics}
        onTopicSelect={onTopicSelect} 
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

// import React from 'react';
// import TopNavigationBar from '../components/TopNavigationBar';
// import PhotoList from '../components/PhotoList';
// import '../styles/HomeRoute.scss';
// import PhotoDetailsModal from './PhotoDetailsModal';

// const HomeRoute = ({
//   isModalOpen,
//   toggleModal,
//   favorites,
//   addFavorite,
//   removeFavorite,
//   onPhotoClick,
//   selectedPhoto,
//   photos,
//   topics,
//   onTopicSelect,
// }) => {
//   return (
//     <div className="home-route">
//       <TopNavigationBar 
//         favoritesCount={favorites.length} 
//         topics={topics}
//         onTopicSelect={onTopicSelect} // Pass the handler
//       />
//       <PhotoList
//         photos={photos}
//         favorites={favorites}
//         addFavorite={addFavorite}
//         removeFavorite={removeFavorite}
//         onPhotoClick={onPhotoClick}
//       />
//       {isModalOpen && (
//         <PhotoDetailsModal
//           toggleModal={toggleModal}
//           selectedPhoto={selectedPhoto}
//           favorites={favorites}
//           addFavorite={addFavorite}
//           removeFavorite={removeFavorite}
//         />
//       )}
//     </div>
//   );
// };

// export default HomeRoute;

