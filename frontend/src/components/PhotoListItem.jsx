import React from "react";
import PhotoFavButton from './PhotoFavButton';
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({ photo, isFavorited, toggleFavorite, onPhotoClick }) => {
  return (
    <div className="photo-list__item" onClick={() => onPhotoClick(photo)}>
      <PhotoFavButton isFavorited={isFavorited} toggleFavorite={toggleFavorite} />
      <img src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} className="photo-list__image" />
      <div className="photo-list__user-details">
        <img src={photo.user.profile} alt={`${photo.user.username}'s profile`} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          {photo.user.username}
          <div className="photo-list__user-location">{photo.location.city}, {photo.location.country}</div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
