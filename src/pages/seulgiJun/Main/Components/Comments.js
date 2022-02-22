import React from 'react';
import Comment from './Comment';

function Comments(props) {
  return (
    <div className="feedColumnRow comments">
      {/* <Comment username="dal_nim" text="달님이가 더 귀여워^~^" />
      {props.comments.map(comment => (
        <Comment username={props.username} text={comment} />
      ))} */}
      {props.comments.map(comment => (
        <Comment
          key={comment.id}
          username={comment.userName}
          text={comment.content}
        />
      ))}
    </div>
  );
}

export default Comments;
