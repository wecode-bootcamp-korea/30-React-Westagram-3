import React from 'react';

function Comment(props) {
  return (
    <p>
      <span className="boldText">{props.username}</span> {props.text}
    </p>
  );
}

export default Comment;
