import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './App.css';
import GenerateButton from './GenerateButton';
import GifContainer from './GifContainer';

function App() {
  // State variables
  const [gifUrl, setGifUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  // Function to get a random GIF from the Giphy API
  const getGif = () => {
    const apiKey = "Txhb9aHL9xtbOxA9YC9HFkBmmK5bg46u";
    const tag = "fails";
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${tag}`;

    setIsLoading(true);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch GIF from Giphy API");
        }
        return response.json();
      })
      .then((data) => {
        const gifUrl = data.data.images.fixed_height.url;
        setGifUrl(gifUrl);
      })
      .catch((error) => {
        console.error(error);
        alert("There was a problem fetching the GIF. Please try again later.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  // Function to handle the image load event
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  // Use the useEffect hook to get a random GIF when the component mounts
  useEffect(() => {
    getGif();
  }, []);

  // Render the component
  return (
    <div>
      {/* Generate button */}
      <GenerateButton onClick={getGif} />

      {/* GIF container */}
      <GifContainer
        gifUrl={gifUrl}
        isLoading={isLoading}
        isImageLoaded={isImageLoaded}
        handleImageLoad={handleImageLoad}
      />

      {/* Footer */}
      <footer>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/juan-pardoca" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </li>
          <li>
            <a href="https://github.com/juanxxoxo" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </li>
        </ul>
      </footer>

    </div>
  );
}

export default App;
