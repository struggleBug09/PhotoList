import React from "react";
import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  const { username, imageSource, id, location, profile } = props;

  const photos = new Array(3).fill(null);

  return (
    <>
      {photos.map((_, index) => (
        <div key={index} className="photo-list__item" id={`photo-${id}-${index}`}>
          <PhotoFavButton />  {/* Adding the favorite button */}
          <img src={imageSource} alt={`Photo by ${username} taken in ${location.city}, ${location.country}`} className="photo-list__image" />
          <div className="photo-list__user-details">
            <img src={profile} alt={`${username}'s profile`} className="photo-list__user-profile" />
            <div className="photo-list__user-info">
              <h2>{username}</h2>
              <h2 className="photo-list__user-location">{location.city}, {location.country}</h2>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PhotoListItem;