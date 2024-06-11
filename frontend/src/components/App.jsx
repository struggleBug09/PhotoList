import React, { useState } from 'react';
import HomeRoute from '../routes/HomeRoute';
import '../App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const addFavorite = photoId => {
    if (!favorites.includes(photoId)) {
      setFavorites([...favorites, photoId]);
    }
  };

  const removeFavorite = photoId => {
    setFavorites(favorites.filter(id => id !== photoId));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <HomeRoute
        addFavorite={addFavorite}
        removeFavorite={removeFavorite}
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        favorites={favorites} />
    </div>
  );
};

export default App;

