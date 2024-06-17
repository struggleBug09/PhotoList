import React from 'react';
import FavBadge from './FavBadge';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';

const TopNavigationBar = ({ favoritesCount, topics, onTopicSelect }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
        <TopicList topics={topics} onTopicSelect={onTopicSelect} /> 
        <FavBadge favoritesCount={favoritesCount} />
    </div>
  );
};

export default TopNavigationBar;
