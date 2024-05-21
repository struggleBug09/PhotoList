import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';

const FavBadge = ({ favoritesCount }) => {
  return (
    <div className='fav-badge'>
      <FavIcon selected={favoritesCount > 0} />
      {favoritesCount > 0 && (
        <div className="fav-badge__count">
          <span>{favoritesCount}</span>
        </div>
      )}
    </div>
  );
};


export default FavBadge;

// import React from 'react';
// import FavIcon from './FavIcon';
// import '../styles/FavBadge.scss';

// const FavBadge = ({ favoritesCount }) => {
//   return (
//     <div className='fav-badge'>
//       {/* Pass true to selected if there's at least one favorite */}
//       <FavIcon selected={favoritesCount > 0} />
//       {/* Optionally, display the count next to the icon if needed */}
//       {favoritesCount > 0 && (
//         <span className="fav-badge__count">{favoritesCount}</span>
//       )}
//     </div>
//   );
// };

// export default FavBadge;

