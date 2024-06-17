import React from 'react';
import HomeRoute from '../routes/HomeRoute';
import '../App.scss';
import useApplicationData from '../hooks/useApplicationData';
import TestApi from './TestApi';

const App = () => {
  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        addFavorite={updateToFavPhotoIds}
        removeFavorite={updateToFavPhotoIds}
        isModalOpen={state.isModalOpen}
        toggleModal={onClosePhotoDetailsModal}
        favorites={state.favorites}
        onPhotoClick={onPhotoSelect}
        selectedPhoto={state.selectedPhoto}
        photos={state.photos}
        topics={state.topics}
      />
      <TestApi />
    </div>
  );
};

export default App;

