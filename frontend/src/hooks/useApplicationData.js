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
    case 'SET_PHOTOS':
      return {
        ...state,
        photos: action.payload,
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
      dispatch({
        type: 'SET_INITIAL_DATA',
        payload: {
          photos,
          topics,
        },
      });
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

  const onTopicSelect = (topicId) => {
    console.log(`Selected topic ID: ${topicId}`);
    fetch(`/api/topics/photos/${topicId}`)
      .then(res => res.json())
      .then(photos => {
        console.log('Photos for selected topic:', photos);
        dispatch({ type: 'SET_PHOTOS', payload: photos });
      });
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
    onTopicSelect,
  };
};

export default useApplicationData;
