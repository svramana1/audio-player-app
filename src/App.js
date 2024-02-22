// App.js
import React, { useState, useEffect } from 'react';
import FileUploader from './components/FileUploader';  // Adjust the path
import AudioPlayer from './components/AudioPlayer';    // Adjust the path
import Playlist from './components/Playlist';

const App = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [playlist, setPlaylist] = useState([]);

  const handleFileUpload = (file) => {
    setAudioFile(file);
    setPlaylist([...playlist, { name: file.name, src: URL.createObjectURL(file) }]);
  };

  return (
    <div className="app">
      <FileUploader onFileUpload={handleFileUpload} />
      {audioFile && <AudioPlayer audioSrc={URL.createObjectURL(audioFile)} />}
      {playlist.length > 0 && <Playlist playlist={playlist} />}
    </div>
  );
};

export default App;
