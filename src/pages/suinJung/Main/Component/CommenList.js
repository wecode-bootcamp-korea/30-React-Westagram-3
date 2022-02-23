import { useEffect, useState } from 'react';
import Comment from './Comment';

function CommentList(props) {
  const [commentList, setCommentList] = useState([]); // 댓글 내용만 모아놓은 배열

  useEffect(() => {
    fetch('http://localhost:3000/data/suinJung/commentData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <div>
      {commentList.map(el => {
        return <Comment key={el.id} name={el.userName} comment={el.content} />;
      })}

      {props.text.map((el, index) => {
        return <Comment key={index} name="jung" comment={el} />;
      })}
    </div>
  );
}

export default CommentList;
