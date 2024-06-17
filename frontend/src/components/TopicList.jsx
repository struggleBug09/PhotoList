import React from "react";
import TopicListItem from './TopicListItem';
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicSelect }) => {
  console.log('Topics in TopicList:', topics);
  return (
    <div className="top-nav-bar__topic-list">
      {topics && topics.map(topic => (
        <TopicListItem
          key={topic.id}
          slug={topic.slug}
          title={topic.title}
          onTopicSelect={() => onTopicSelect(topic.id)} // Pass the function
        />
      ))}
    </div>
  );
};

export default TopicList;

