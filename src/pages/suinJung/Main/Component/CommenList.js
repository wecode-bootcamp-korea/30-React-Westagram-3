import { useEffect, useState } from 'react';
import Comment from './Comment';

function CommentList(props) {
  const [commentList, setCommentList] = useState([]); // 댓글 내용만 모아놓은 배열

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <div>
      {commentList.map(comment => {
        return (
          <Comment
            key={comment.id}
            name={comment.userName}
            comment={comment.content}
          />
        );
      })}
      {props.text.map(el => {
        return <Comment name="jung" comment={el} />;
      })}
    </div>
  );
}

export default CommentList;
