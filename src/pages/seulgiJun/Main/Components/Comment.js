import React from 'react';

function Comments(props) {
  return (
    <div className="feedColumnRow comments">
      <p>
        <span className="boldText">{props.username}</span> {props.text}
      </p>
    </div>
  );
}

export default Comments;
