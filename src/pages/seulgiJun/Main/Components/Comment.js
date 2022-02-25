import React from 'react';

function Comment({ username, text }) {
  return (
    <p>
      <span className="boldText">{username}</span> {text}
    </p>
  );
}

export default Comment;
