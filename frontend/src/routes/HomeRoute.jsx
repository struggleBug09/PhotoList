// import React, { useState } from 'react';
// import TopNavigationBar from '../components/TopNavigationBar';
// import PhotoList from '../components/PhotoList';
// import photos from '../mocks/photos';
// import PhotoDetailsModal from './PhotoDetailsModal';

// const HomeRoute = ({ isModalOpen, toggleModal }) => {
//   const [favorites, setFavorites] = useState([]);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   const addFavorite = photoId => {
//     if (!favorites.includes(photoId)) {
//       setFavorites([...favorites, photoId]);
//     }
//   };

//   const removeFavorite = photoId => {
//     setFavorites(favorites.filter(id => id !== photoId));
//   };

//   const handlePhotoClick = (photo) => {
//     setSelectedPhoto(photo);
//     toggleModal();
//   };

//   return (
//     <div className="home-route">
//       <TopNavigationBar favoritesCount={favorites.length} />
//       <PhotoList
//         photos={photos}
//         favorites={favorites}
//         addFavorite={addFavorite}
//         removeFavorite={removeFavorite}
//         onPhotoClick={handlePhotoClick}
//       />
//       {isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} selectedPhoto={selectedPhoto} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} />}
//     </div>
//   );
// };

// export default HomeRoute;

import React, { useState } from 'react';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';
import photos from '../mocks/photos';
import PhotoDetailsModal from './PhotoDetailsModal';

const HomeRoute = ({ isModalOpen, toggleModal, favorites, addFavorite, removeFavorite }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    toggleModal();
  };

  return (
    <div className="home-route">
      <TopNavigationBar favoritesCount={favorites.length} />
      <PhotoList
        photos={photos}
        favorites={favorites}
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        onPhotoClick={handlePhotoClick}
      />
      {isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} selectedPhoto={selectedPhoto} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} />}
    </div>
  );
};

export default HomeRoute;