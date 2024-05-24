// import { useState, useEffect } from 'react';
// import photos from '../mocks/photos';
// import topics from '../mocks/topics';

// const useApplicationData = () => {
//   const [state, setState] = useState({
//     isModalOpen: false,
//     favorites: [],
//     selectedPhoto: null,
//     photos: [],
//     topics: [],
//   });

//   useEffect(() => {
//     // Initialize the state with mock data
//     setState((prev) => ({
//       ...prev,
//       photos: photos,
//       topics: topics,
//     }));
//   }, []);

//   const toggleModal = () => {
//     setState((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));
//   };

//   const updateToFavPhotoIds = (photoId) => {
//     setState((prev) => {
//       const isFavorite = prev.favorites.includes(photoId);
//       const favorites = isFavorite
//         ? prev.favorites.filter((id) => id !== photoId)
//         : [...prev.favorites, photoId];
//       return { ...prev, favorites };
//     });
//   };

//   const onPhotoSelect = (photo) => {
//     setState((prev) => ({ ...prev, selectedPhoto: photo }));
//     toggleModal();
//   };

//   const onClosePhotoDetailsModal = () => {
//     setState((prev) => ({ ...prev, selectedPhoto: null }));
//     toggleModal();
//   };

//   return {
//     state,
//     onPhotoSelect,
//     updateToFavPhotoIds,
//     onClosePhotoDetailsModal,
//   };
// };

// export default useApplicationData;

import { useReducer, useEffect } from 'react';
import photos from '../mocks/photos'; // Ensure the path is correct
import topics from '../mocks/topics'; // Ensure the path is correct

const initialState = {
  isModalOpen: false,
  favorites: [],
  selectedPhoto: null,
  photos: [],
  topics: [],
};

const reducer = (state, action) => {
  switch (action.type) {
  case 'SET_INITIAL_DATA':
    return {
      ...state,
      photos: action.payload.photos,
      topics: action.payload.topics,
    };
  case 'FAV_PHOTO_ADDED':
    return {
      ...state,
      favorites: [...state.favorites, action.payload.id],
    };
  case 'FAV_PHOTO_REMOVED':
    return {
      ...state,
      favorites: state.favorites.filter((id) => id !== action.payload.id),
    };
  case 'PHOTO_SELECTED':
    return {
      ...state,
      selectedPhoto: action.payload.photo,
      isModalOpen: true,
    };
  case 'CLOSE_PHOTO_DETAILS_MODAL':
    return {
      ...state,
      selectedPhoto: null,
      isModalOpen: false,
    };
  default:
    return state;
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Initialize the state with mock data
    dispatch({
      type: 'SET_INITIAL_DATA',
      payload: {
        photos: photos,
        topics: topics,
      },
    });
  }, []);

  const updateToFavPhotoIds = (photoId) => {
    if (state.favorites.includes(photoId)) {
      dispatch({ type: 'FAV_PHOTO_REMOVED', payload: { id: photoId } });
    } else {
      dispatch({ type: 'FAV_PHOTO_ADDED', payload: { id: photoId } });
    }
  };

  const onPhotoSelect = (photo) => {
    dispatch({ type: 'PHOTO_SELECTED', payload: { photo } });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: 'CLOSE_PHOTO_DETAILS_MODAL' });
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;

