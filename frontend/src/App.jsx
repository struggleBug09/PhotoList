import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';
import FavBadge from './components/FavBadge';
import './App.scss';

const App = () => (
  <div className="App">
    <TopNavigationBar>
      <TopicList />
      <FavBadge />
    </TopNavigationBar>
    <PhotoList />
  </div>
);

export default App;

