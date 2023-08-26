import { useState, useEffect } from 'react';

function fetchShuttleImages() {
  const [shuttleImages, setShuttleImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.spacexdata.com/v3');
        const data = await response.json();
        setShuttleImages(data);
      } catch (error) {
        console.error('Error fetching shuttle images:', error);
      }
    }

    fetchData();
  }, []);

  return shuttleImages;
}
export default fetchShuttleImages;