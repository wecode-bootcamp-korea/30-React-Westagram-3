import React from 'react';

function Comment(props) {
  return (
    <p key={props.id}>
      <span className="boldText">{props.username}</span> {props.text}
    </p>
  );
}

export default Comment;
