import React, { useState } from 'react';
import './App.css';

function Image() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="image-upload">
      <input
        type="file"
        accept="image/*"
        className="file-input"
        onChange={handleFileChange}
      />

      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="preview"
          className="preview-image"
        />
      )}
    </div>
  );
}

export default Image;
