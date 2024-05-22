// import React, { useState } from 'react';
// import HomeRoute from 'routes/HomeRoute';
// import './App.scss';

// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedPhoto, setSelectedPhoto] = useState(null);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div className="App">
//       <HomeRoute
//         isModalOpen={isModalOpen}
//         toggleModal={toggleModal}
//         setSelectedPhoto={setSelectedPhoto}
//         selectedPhoto={selectedPhoto} />
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react';
import HomeRoute from './routes/HomeRoute';
import './App.scss';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="App">
      <HomeRoute isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default App;

