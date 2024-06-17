import { useReducer, useEffect } from 'react';

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
    Promise.all([
      fetch('/api/photos').then(res => res.json()),
      fetch('/api/topics').then(res => res.json()),
    ])
      .then(([photos, topics]) => {
        console.log('Photos:', photos);
        console.log('Topics:', topics);
        dispatch({
          type: 'SET_INITIAL_DATA',
          payload: { photos, topics },
        });
      })
      .catch(error => console.error('Error fetching data:', error));
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
