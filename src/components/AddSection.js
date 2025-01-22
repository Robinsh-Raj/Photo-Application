import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function AddSection({ onPhotoAdd }) {
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);
  const [isCapturing, setIsCapturing] = useState(false);
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    if (isCapturing) {
      initializeCamera();
    }
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, [isCapturing]);

  const initializeCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { facingMode: 'environment' }, 
        audio: false 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        streamRef.current = stream;
      }
    } catch (error) {
      console.log('Camera initialization:', error);
      setIsCapturing(false);
    }
  };

  const startCamera = () => {
    setIsCapturing(true);
  };

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    
    canvas.getContext('2d').drawImage(video, 0, 0);
    const imageData = canvas.toDataURL('image/jpeg');
    setPhoto(imageData);
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
    }
    setIsCapturing(false);
  };

  const handleUpload = () => {
    const newPhoto = {
      id: Date.now(),
      image: photo,
      title: `Photo ${Date.now()}`,
      comments: []
    };
    
    onPhotoAdd(newPhoto);
    navigate('/trending');
  };

  const retakePhoto = () => {
    setPhoto(null);
    startCamera();
  };

  return (
    <div className="camera-section">
      <h2>Take a New Photo</h2>
      
      {!isCapturing && !photo && (
        <button className="primary-button" onClick={startCamera}>
          Open Camera
        </button>
      )}

      {isCapturing && (
        <div className="camera-container">
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline
            className="camera-preview"
          />
          <button className="capture-button" onClick={capturePhoto}>
            Take Photo
          </button>
        </div>
      )}

      {photo && (
        <div className="preview-container">
          <img 
            src={photo} 
            alt="Preview" 
            className="photo-preview"
          />
          <div className="button-group">
            <button className="secondary-button" onClick={retakePhoto}>
              Retake
            </button>
            <button className="primary-button" onClick={handleUpload}>
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddSection;
