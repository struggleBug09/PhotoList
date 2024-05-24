import { useReducer, useEffect } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

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

