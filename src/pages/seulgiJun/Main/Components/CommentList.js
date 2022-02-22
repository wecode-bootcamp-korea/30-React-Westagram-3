import React from 'react';

import Comment from './Comment';

function CommentList(props) {
  return (
    <div className="feedColumnRow comments">
      {props.commentsData.map(comment => (
        <Comment
          key={comment.id}
          username={comment.userName}
          text={comment.content}
        />
      ))}
      {props.newComments.map((comment, index) => (
        <Comment key={index} username={props.currentUsername} text={comment} />
      ))}
    </div>
  );
}

export default CommentList;
