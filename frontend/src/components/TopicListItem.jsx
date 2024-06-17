import React, { useState } from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ title, onTopicSelect }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="topic-list__item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onTopicSelect}
    >
      <h3 className={isHovered ? 'hovered' : ''}>{title}</h3>
    </div>
  );
};

export default TopicListItem;

