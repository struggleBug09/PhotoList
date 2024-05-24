import { useState, useEffect } from 'react';
import photos from '../mocks/photos';
import topics from '../mocks/topics';

const useApplicationData = () => {
  const [state, setState] = useState({
    isModalOpen: false,
    favorites: [],
    selectedPhoto: null,
    photos: [],
    topics: [],
  });

  useEffect(() => {
    // Initialize the state with mock data
    setState((prev) => ({
      ...prev,
      photos: photos,
      topics: topics,
    }));
  }, []);

  const toggleModal = () => {
    setState((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));
  };

  const updateToFavPhotoIds = (photoId) => {
    setState((prev) => {
      const isFavorite = prev.favorites.includes(photoId);
      const favorites = isFavorite
        ? prev.favorites.filter((id) => id !== photoId)
        : [...prev.favorites, photoId];
      return { ...prev, favorites };
    });
  };

  const onPhotoSelect = (photo) => {
    setState((prev) => ({ ...prev, selectedPhoto: photo }));
    toggleModal();
  };

  const onClosePhotoDetailsModal = () => {
    setState((prev) => ({ ...prev, selectedPhoto: null }));
    toggleModal();
  };

  return {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
