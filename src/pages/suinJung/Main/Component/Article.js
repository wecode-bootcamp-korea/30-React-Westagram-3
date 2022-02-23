import { useState } from 'react';
import CommentList from './CommenList';

function Article({ name }) {
  const [content, setContent] = useState('');
  const [contentArray, setContentArray] = useState([]);

  const commentContent = event => {
    setContent(event.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    contentArray.push(content);
    setContentArray(contentArray);
    setContent('');
  };

  const isValid = !(content.length > 0);

  return (
    <article>
      <div className="feed-nav">
        <div className="user">
          <img
            alt="user_image"
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80\\"
          />
          <h3>{name}</h3>
        </div>
        <div className="more">
          <img alt="more" src="../../images/suinJung/more.png" />
        </div>
      </div>
      <div className="feed-image">
        <img
          alt="feed_image"
          src="https://images.unsplash.com/photo-1616738227115-954748f35c61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        />
      </div>
      <div className="feed-bottom">
        <div className="interactiveicon">
          <div className="icon-left">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="far fa-paper-plane"></i>
          </div>
          <i className="far fa-bookmark"></i>
        </div>
        <div className="feedlike">
          <div className="likeimage">
            <img alt="my_image" src="../../images/suinJung/face.png" />
          </div>
          <p>
            <span>aineworld</span>님 <span>외 10명</span>이 좋아합니다.
          </p>
        </div>
        <div style={{ marginTop: '10px' }} className="comment-start">
          <CommentList text={contentArray} />
        </div>
        <p className="aftertime">42분 전</p>
      </div>
      <form>
        <input
          id="comment"
          type="text"
          placeholder={'댓글...'}
          value={content}
          onChange={commentContent}
        />
        <button
          className="gocomment"
          disabled={isValid}
          onClick={handleClick}
          style={{ cursor: !isValid ? 'pointer' : 'default' }}
        >
          게시
        </button>
      </form>
    </article>
  );
}

export default Article;
