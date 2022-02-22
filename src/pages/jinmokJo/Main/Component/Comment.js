import React from 'react';

function Comment(name, comment, user, commentValue) {
  return (
    <li className="commentArea">
      <div className="id_comment">
        <div className="bold">{user === 'me' ? 'wecode_bootcomp' : name}</div>
        <div className="comment">{user === 'me' ? commentValue : comment}</div>
      </div>
      <button
        className="commentHeart heartButton hover"
        // onClick="clickHeartButton(this)"
      >
        <i className="far fa-heart"></i>
      </button>
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
