// PhotoListItem.jsx
import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = ({ user, urls, id, location }) => {
  // Destructure directly in the function parameter for cleaner access
  return (
    <div className="photo-list__item" id={`photo-${id}`}>
      <PhotoFavButton />
      <img src={urls.regular} alt={`Photo by ${user.username} taken in ${location.city}, ${location.country}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={user.profile} alt={`${user.username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <h2>{user.username}</h2>
          <h2 className="photo-list__user-location">{location.city}, {location.country}</h2>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;


