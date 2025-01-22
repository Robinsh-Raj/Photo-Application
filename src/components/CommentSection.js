import React, { useState } from 'react';

function CommentSection({ comments, onCommentAdd }) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment = {
      id: Date.now(),
      text: newComment,
      user: 'Current User'
    };

    onCommentAdd(comment);
    setNewComment('');
  };

  return (
    <div className="comment-section">
      <h3>Comments</h3>
      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <strong>{comment.user}</strong>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default CommentSection;
