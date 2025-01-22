import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CommentSection from './CommentSection';
import photosData from '../data/photos.json';

function PhotoDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const selectedPhoto = photosData.photos.find(p => p.id === parseInt(id));
    setPhoto(selectedPhoto);
  }, [id]);

  const handleCommentAdd = (newComment) => {
    setPhoto(prev => ({
      ...prev,
      comments: [...prev.comments, newComment]
    }));
  };

  if (!photo) return <div>Loading...</div>;

  return (
    <div className="photo-detail">
      <img src={photo.image} alt={photo.title} />
      <h2>{photo.title}</h2>
      <CommentSection 
        comments={photo.comments}
        onCommentAdd={handleCommentAdd}
      />
    </div>
  );
}

export default PhotoDetail;
