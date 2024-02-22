// AudioPlayer.js
import React, { useRef, useEffect } from 'react';

const AudioPlayer = ({ audioSrc, onEnded }) => {
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = audioSrc;
      audioRef.current.load();

      const playPromise = audioRef.current.play();

      if (playPromise) {
        playPromise.catch(error => {
          // Handle the error, e.g., logging or displaying a message
          console.error('Error playing audio:', error);
        });
      }
    }
  }, [audioSrc]);

  return (
    <audio
      ref={audioRef}
      controls
      onEnded={onEnded}
      onLoadedMetadata={() => {
        const savedPosition = localStorage.getItem('audioPosition');
        if (savedPosition && audioRef.current) {
          audioRef.current.currentTime = parseFloat(savedPosition);
        }
      }}
      onTimeUpdate={() => {
        if (audioRef.current) {
          localStorage.setItem('audioPosition', audioRef.current.currentTime.toString());
        }
      }}
    />
  );
};

export default AudioPlayer;
