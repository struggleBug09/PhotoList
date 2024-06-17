import React from 'react';
import TopicListItem from './TopicListItem';
import '../styles/TopicList.scss';

// Maps out topics to allow easier implementation to render to TopNavigationBar
const TopicList = ({ topics }) => {
  console.log('Topics in TopicList:', topics);

  if (!topics || topics.length === 0) {
    return <div>No topics available</div>;
  }

  return (
    <div className="top-nav-bar__topic-list">
      {topics.map(topic => (
        <TopicListItem
          key={topic.id}
          slug={topic.slug}
          title={topic.title}
        />
      ))}
    </div>
  );
};

export default TopicList;
