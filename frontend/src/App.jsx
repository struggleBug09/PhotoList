import React from 'react';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import './App.scss';

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
      />
    </div>
  );
};

export default App;

