// // import React, { useState } from 'react';
// // import TopNavigationBar from '../components/TopNavigationBar';
// // import PhotoList from '../components/PhotoList';
// // import photos from '../mocks/photos';
// // import PhotoDetailsModal from './PhotoDetailsModal';

// // const HomeRoute = ({ isModalOpen, toggleModal, favorites, addFavorite, removeFavorite }) => {
// //   const [selectedPhoto, setSelectedPhoto] = useState(null);

// //   const handlePhotoClick = (photo) => {
// //     setSelectedPhoto(photo);
// //     toggleModal();
// //   };

// //   return (
// //     <div className="home-route">
// //       <TopNavigationBar favoritesCount={favorites.length} />
// //       <PhotoList
// //         photos={photos}
// //         favorites={favorites}
// //         addFavorite={addFavorite}
// //         removeFavorite={removeFavorite}
// //         onPhotoClick={handlePhotoClick}
// //       />
// //       {isModalOpen && <PhotoDetailsModal toggleModal={toggleModal} selectedPhoto={selectedPhoto} favorites={favorites} addFavorite={addFavorite} removeFavorite={removeFavorite} />}
// //     </div>
// //   );
// // };

// // export default HomeRoute;
// import React from 'react';
// import TopNavigationBar from '../components/TopNavigationBar';
// import PhotoList from '../components/PhotoList';
// import PhotoDetailsModal from './PhotoDetailsModal';

// const HomeRoute = ({
//   isModalOpen,
//   toggleModal,
//   favorites,
//   addFavorite,
//   removeFavorite,
//   onPhotoClick,
//   selectedPhoto,
//   photos, // Accept photos as a prop
// }) => {
//   console.log("HomeRoute photos:", photos); // Debug log

//   return (
//     <div className="home-route">
//       <TopNavigationBar favoritesCount={favorites.length} />
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
}) => {
  return (
    <div className="home-route">
      <TopNavigationBar favoritesCount={favorites.length} />
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
