import React from 'react';
import "../styles/TopNavigationBar.scss";
import TopicList from './TopicList'; 
import FavBadge from './FavBadge';


//Takes topics to render and keeps track of faves to update counter
const TopNavigationBar = ({ topics, favoritesCount }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className="top-nav-bar__topic-list">
        <TopicList topics={topics} />
      </span>
      <FavBadge favoritesCount={favoritesCount} />
    </div>
  );
};

export default TopNavigationBar;
