import React from 'react';
import TopicList from './TopicList';
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';

const TopNavigationBar = ({ topics, favoritesCount }) => {
  console.log('TopNavigationBar topics:', topics);
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge favoritesCount={favoritesCount} />
    </div>
  );
};

export default TopNavigationBar;

