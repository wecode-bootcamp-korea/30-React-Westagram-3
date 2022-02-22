import React from 'react';
import Comment from './Comment';

function Comments(props) {
  return (
    <div className="feedColumnRow comments">
      {props.commentsData.map(comment => (
        <Comment
          key={comment.id}
          username={comment.userName}
          text={comment.content}
        />
      ))}
      {props.comments.map((comment, index) => (
        <Comment key={index} username={props.username} text={comment} />
      ))}
    </div>
  );
}

export default Comments;
