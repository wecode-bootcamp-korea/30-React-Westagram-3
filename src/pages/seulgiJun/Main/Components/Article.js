import React, { useState, useRef, useEffect } from 'react';

// import Comment from './Comment';
import Comments from './Comments';

function Article() {
  const [inputValue, setInputValue] = useState();
  // const [comments, setComments] = useState([]);
  const input = useRef();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setComments(data);
      });
  }, []);

  const handleComments = event => {
    setInputValue(event.target.value);
  };

  const addComment = event => {
    event.preventDefault();
    // setComments([...comments, inputValue]);
    input.current.value = '';
  };

  return (
    <article className="feed">
      <div className="feedColumn">
        <div className="feedColumnRow">
          <img
            alt="profile image of haedalbyeol"
            className="profileImg"
            src="/images/seulgiJun/해달별.jpeg"
          />
          <span>hae_dal_byeol</span>
        </div>
        <img alt="more icon" src="/images/seulgiJun/more.png" />
      </div>

      <img
        alt="image of cat, byeolnim"
        className="feedImg"
        src="/images/seulgiJun/별님.jpeg"
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
            <span className="boldText">hae_nim</span>님{' '}
            <span className="boldText">외 10명</span>이 좋아합니다
          </p>
        </div>
      </div>

      <div className="feedColumn feedColumnSmall">
        <p>
          <span className="boldText">hae_dal_byeol</span> 별님이는 아래에서
          찍어도 귀여워...
          <span className="grayText">더 보기</span>
        </p>
      </div>

      <div className="feedColumn feedColumnSmall">
        {/* <Comments comments={comments} username="hae_nim" /> */}
        <Comments comments={comments} />
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
          <span className="grayText">42분 전</span>
        </p>
      </div>

      <form className="feedColumn">
        <input
          onChange={handleComments}
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
