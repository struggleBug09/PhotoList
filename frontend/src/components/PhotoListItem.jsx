import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props;

  return (
    <div className="photo-list-item" id={`photo-${id}`}>
      <div className="photo-profile">
        <img src={profile} alt={`${username}'s profile`} className="profile-img" />
        <h2 className="photo-username">{username}</h2>
      </div>
      <img src={imageSource} alt={`Photo by ${username} taken in ${location.city}, ${location.country}`} className="photo-image" />
      <p className="photo-location">{location.city}, {location.country}</p>
    </div>
  );
};

export default PhotoListItem;
