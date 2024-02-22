// Playlist.js
import React from 'react';

const Playlist = ({ playlist }) => {
  return (
    <div className="playlist">
      <h2>Playlist</h2>
      <ul>
        {playlist.map((audio, index) => (
          <li key={index}>{audio.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
