import React, { useState, useEffect } from 'react';

import Comment from './Comment';

function Feeds({
  name,
  nickname,
  profileImg,
  contentImg,
  likeCount,
  content,
  comments,
}) {
  const [commentValue, setCommentValue] = useState('');
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    setCommentList(comments);
  }, []);

  const handleCommentInput = e => {
    setCommentValue(e.target.value);
  };

  const commentSubmitBtnActive = commentValue.length > 0;

  const updateComments = () => {
    return commentList.map(comment => {
      return (
        <Comment
          key={comment.id}
          name={comment.userName}
          comment={comment.content}
        />
      );
    });
  };

  const commetDataToCommentList = () => {
    const addCommentList = {
      id: commentList.length + 1,
      userName: 'wecode_bootcamp',
      content: commentValue,
      isLiked: false,
    };
    setCommentList(prevState => [...prevState, addCommentList]);
  };

  const submitComment = e => {
    e.preventDefault();
    commetDataToCommentList();
    e.target.reset();
    setCommentValue('');
  };

  const onCheckEnter = e => {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      if (commentSubmitBtnActive) {
        commetDataToCommentList();
      }
      e.target.value = '';
      setCommentValue('');
    }
  };

  return (
    <article className="feedArticle">
      <div className="articleHeader">
        <div className="profiles feeds_my_id">
          <a href="#" className="profile-img">
            <img src={profileImg} />
          </a>
          <div className="id_text">
            <span className="bold_600">{name}</span>
            <span className="subFont">{nickname}</span>
          </div>
        </div>
        <a className="article-header-menu" href="#">
          <i className="fas fa-ellipsis-h"></i>
        </a>
      </div>
      <div className="contents">
        <img className="contentImg" src={contentImg} />
      </div>
      <div className="article-bottom">
        <div className="article-btns">
          <div>
            <button className="heartButton hover" onClick={console.log()}>
              <i className="far fa-heart"></i>
            </button>
            <button className="hover">
              <i className="far fa-comment"></i>
            </button>
            <button className="hover">
              <i className="fas fa-share-square"></i>
            </button>
          </div>
          <div>
            <button className="bookmarkButton hover" onClick={console.log()}>
              <i className="far fa-bookmark"></i>
            </button>
          </div>
        </div>
        <div className="like-section">
          <div className="like-profile"></div>
          <span>
            <span className="like-representive bold_600">seungyoun_iain</span>님
            외 <span className="like-people bold_600">{likeCount}명</span>이
            좋아합니다
          </span>
        </div>
        <div className="article-text">
          <span>
            <span className="bold">{name}</span>
            {content}
          </span>
        </div>
        <button className="reply">댓글</button>
        <ul className="commentsBox">{updateComments()}</ul>
        <div className="upload-time">54분 전</div>
      </div>
      <div className="comments">
        <form
          className="commentForm"
          method="post"
          action=""
          onSubmit={submitComment}
        >
          <button className="emoji" type="button">
            <i className="far fa-smile"></i>
          </button>
          <textarea
            name="commentInput"
            className="commentInput"
            placeholder="댓글 달기..."
            autoComplete="off"
            autoCorrect="off"
            onChange={handleCommentInput}
            onKeyDown={onCheckEnter}
          ></textarea>
          <button
            className={`commentSubmit ${
              commentSubmitBtnActive ? 'commentSubmitActive' : ''
            }`}
            type="submit"
            disabled={commentSubmitBtnActive ? false : true}
          >
            게시
          </button>
        </form>
      </div>
    </article>
  );
}

export default Feeds;
