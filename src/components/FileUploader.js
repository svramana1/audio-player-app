// FileUploader.js
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';

const FileUploader = ({ onFileUpload }) => {
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      onFileUpload(acceptedFiles[0]);
    }
  };

  return (
    <Dropzone onDrop={onDrop} accept=".mp3">
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()} className="file-uploader">
          <input {...getInputProps()} />
          <p>Drag & drop an audio file here, or click to select one</p>
        </div>
      )}
    </Dropzone>
  );
};

export default FileUploader;
