import { useState } from 'react';
import Comment from './Comment.js';

export default function Feed({
  id,
  userName,
  userImg,
  feedImg,
  commentDataList,
}) {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState(commentDataList);

  function commentUpload(e) {
    e.preventDefault();
    if (comment !== '') {
      setCommentList(
        commentList.concat({
          key: commentList.length,
          name: 'kangho_yoo',
          text: comment,
        })
      );
    }
    setComment('');
  }

  function commentInput(e) {
    setComment(e.target.value);
  }

  return (
    <article className="article">
      <div className="articleTop">
        <div className="account">
          <div>
            <img src={userImg} className="profile" alt="유저이미지" />
          </div>
          <div className="name">
            <span>{userName}</span>
          </div>
        </div>
        <div>
          <i className="fas fa-ellipsis-h" />
        </div>
      </div>
      <div>
        <img src={feedImg} alt="메인 이미지" className="artImg" />
      </div>
      <div className="iconsWrap">
        <div className="icons">
          <button className="heart">
            <i className="fas fa-heart" />
          </button>
          <i className="far fa-comment" />
          <i className="fas fa-file-upload" />
        </div>
        <div>
          <i className="fas fa-bookmark" />
        </div>
      </div>
      <div className="alert">
        <img
          src="https://images.unsplash.com/photo-1644329901564-1e47f5d1b81a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
          alt="이미지"
          className="loveProfile"
        />
        <span className="good">
          <span className="bold">alneworld</span>님 외
          <span className="bold">10명</span>이좋아합니다
        </span>
      </div>
      <div className="comments">
        {commentList.map((el, i) => {
          return <Comment key={i} name={el.name} text={el.text} />;
        })}
      </div>
      <p className="mentTime">42분 전</p>
      <form className="input" onSubmit={commentUpload}>
        <input
          type="text"
          className="commentInput"
          value={comment}
          onChange={commentInput}
          placeholder="댓글 달기..."
        />
        <input
          type="button"
          className="send"
          onClick={commentUpload}
          value="게시"
        />
      </form>
    </article>
  );
}
