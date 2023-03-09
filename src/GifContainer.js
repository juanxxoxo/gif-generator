import React from 'react';

const GifContainer = ({ gifUrl, isLoading, isImageLoaded, handleImageLoad }) => {
  return (
    <div id="gif-container">
      {isLoading ? (
        <div className="spinner-border text-light" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <img
          src={gifUrl}
          alt="Random Gif"
          onLoad={handleImageLoad}
          style={{ display: isImageLoaded ? "block" : "none" }}
        />
      )}
    </div>
  );
}

export default GifContainer;
