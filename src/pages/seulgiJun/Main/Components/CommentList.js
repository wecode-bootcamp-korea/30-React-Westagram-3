import React from 'react';

import Comment from './Comment';

function CommentList({ commentsData, newComments, currentUsername }) {
  return (
    <div className="feedColumnRow comments">
      {commentsData.map(comment => (
        <Comment
          key={comment.id}
          username={comment.userName}
          text={comment.content}
        />
      ))}
      {newComments.map((comment, index) => (
        <Comment key={index} username={currentUsername} text={comment} />
      ))}
    </div>
  );
}

export default CommentList;
