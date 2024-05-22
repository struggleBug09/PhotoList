// import React from 'react';

// import '../styles/PhotoDetailsModal.scss';
// import closeSymbol from '../assets/closeSymbol.svg';

// const PhotoDetailsModal = ({ toggleModal}) => {
//   return (
//     <div className="photo-details-modal">
//       <button className="photo-details-modal__close-button" onClick={toggleModal}>
//         <img src={closeSymbol} alt="close symbol" />
//       </button>
//     </div>
//   );
// };

// export default PhotoDetailsModal;

// import React from 'react';
// import '../styles/PhotoDetailsModal.scss';
// import closeSymbol from '../assets/closeSymbol.svg';

// const PhotoDetailsModal = ({ toggleModal, selectedPhoto }) => {
//   return (
//     <div className="photo-details-modal">
//       <button className="photo-details-modal__close-button" onClick={toggleModal}>
//         <img src={closeSymbol} alt="Close" />
//       </button>
//       {selectedPhoto && (
//         <div>
//           <img
//             src={selectedPhoto.urls.regular}
//             alt={`Photo by ${selectedPhoto.user.username}`}
//             className="photo-details-modal__image"
//           />
//           <div className="photo-details-modal__photographer-details">
//             <img src={selectedPhoto.user.profile} alt={`${selectedPhoto.user.username}'s profile`} className="photo-details-modal__photographer-profile" />
//             <div className="photo-details-modal__photographer-info">
//               <h2>{selectedPhoto.user.username}</h2>
//               <p className="photo-details-modal__photographer-location">{selectedPhoto.location.city}, {selectedPhoto.location.country}</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PhotoDetailsModal;

import React from 'react';
import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from '../components/PhotoList';

const PhotoDetailsModal = ({ toggleModal, selectedPhoto, similarPhotos }) => {
  if (!selectedPhoto) {
    console.error('No selected photo data available');
    return null;
  }

  const similarPhotosArray = similarPhotos ? Object.values(similarPhotos) : [];

  console.log('Displaying selected photo:', selectedPhoto);
  console.log('Similar photos:', similarPhotosArray);

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
        {/* Photographer details */}
      </div>
      {similarPhotosArray.length > 0 && (
        <div className="photo-details-modal__images">
          <h2>Similar Photos:</h2>
          <PhotoList photos={similarPhotosArray} onPhotoClick={() => {}} />
        </div>
      )}
    </div>
  );
};

export default PhotoDetailsModal;



