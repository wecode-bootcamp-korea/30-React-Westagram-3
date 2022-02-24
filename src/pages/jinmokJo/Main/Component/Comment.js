import React from 'react';
import Button from './Button';

function Comment({ name, comment }) {
  return (
    <li className="commentArea">
      <div className="id_comment">
        <div className="commentUser bold600">{name}</div>
        <div className="comment">{comment}</div>
      </div>
      {/* <button
        className="commentHeart heartButton hover"
        // onClick="clickHeartButton(this)"
      >
        <i className="far fa-heart" />
      </button> */}
      <Button name="heartButton" />
      <button
        className="deleteButton redHover"
        // onClick="clickDeleteButton(this)"
      >
        x
      </button>
    </li>
  );
}

export default Comment;
