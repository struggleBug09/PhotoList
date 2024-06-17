import React, { useEffect, useState } from "react";

const TestApi = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch photos
    fetch("/api/photos")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Photos data:', data);
        setPhotos(data.slice(0, 5));
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        setError(error);
      });

    // Fetch topics
    fetch("/api/topics")
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Topics data:', data);
        setTopics(data.slice(0, 5));
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Photos</h2>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.urls.regular} alt={`Photo by ${photo.user.username}`} />
            <p>{photo.user.username}</p>
          </li>
        ))}
      </ul>

      <h2>Topics</h2>
      <ul>
        {topics.map(topic => (
          <li key={topic.id}>
            {topic.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestApi;
