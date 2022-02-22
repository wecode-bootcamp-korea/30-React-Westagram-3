import React, { useState, useRef, useEffect } from 'react';

import CommentList from './CommentList';

function Article(props) {
  const [inputValue, setInputValue] = useState();
  const [newComments, setNewComments] = useState([]);
  const [commentsData, setCommentsData] = useState([]);
  const input = useRef();

  useEffect(() => {
    fetch('http://localhost:3000/data/seulgiJun/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setCommentsData(data);
      });
  }, []);

  const getComment = event => {
    setInputValue(event.target.value);
  };

  const addComment = event => {
    event.preventDefault();
    setNewComments([...newComments, inputValue]);
    input.current.value = '';
  };

  return (
    <article className="feed">
      <div className="feedColumn">
        <div className="feedColumnRow">
          <img
            alt={`profile image of ${props.feed.userName}`}
            className="profileImg"
            src={props.feed.profileImage}
          />
          <span>{props.feed.userName}</span>
        </div>
        <img alt="more icon" src="/images/seulgiJun/more.png" />
      </div>

      <img
        alt={`image uploaded by ${props.feed.userName}`}
        className="feedImg"
        src={props.feed.image}
      />

      <div className="feedColumn">
        <div className="feedColumnRow">
          <i className="fas fa-heart"></i>
          <img
            className="chatIcon"
            alt="chat icon"
            src="/images/seulgiJun/chat.png"
          />
          <img
            className="uploadIcon"
            alt="share icon"
            src="/images/seulgiJun/upload.png"
          />
        </div>
        <img alt="more icon" src="/images/seulgiJun/bookmark.png" />
      </div>

      <div className="feedColumn feedColumnSmall">
        <div className="feedColumnRow feedContent">
          <img
            alt="profile image of haetnim"
            className="profileImg"
            src="/images/seulgiJun/햇님.jpeg"
          />
          <p>
            <span className="boldText">hae_nim</span>님
            <span className="boldText">외 {props.feed.countLike}명</span>이
            좋아합니다
          </p>
        </div>
      </div>

      <div className="feedColumn feedColumnSmall">
        <p>
          <span className="boldText">{props.feed.userName}</span>
          {` ${props.feed.content}`}
          <span className="grayText">더 보기</span>
        </p>
      </div>

      <div className="feedColumn feedColumnSmall">
        <CommentList
          newComments={newComments}
          commentsData={commentsData}
          currentUsername="hae_nim"
        />
        <div className="feedColumnRow">
          <img
            alt="heart icon"
            className="smallHeart"
            src="/images/seulgiJun/heart.png"
          />
        </div>
      </div>

      <div className="feedColumn feedColumnSmall">
        <p>
          <span className="grayText">{props.feed.uploadTime} 전</span>
        </p>
      </div>

      <form className="feedColumn">
        <input
          onChange={getComment}
          ref={input}
          className="comment"
          placeholder="댓글 달기..."
        />
        <button onClick={addComment} className="postButton">
          게시
        </button>
      </form>
    </article>
  );
}

export default Article;
