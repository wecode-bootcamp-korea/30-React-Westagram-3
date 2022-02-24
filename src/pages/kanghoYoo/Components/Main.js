import { useState, useEffect } from 'react';
import Comment from './Comment.js';

export default function Main() {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([
    { key: 1, name: 'vertex7785', text: '시간이 되게 빠르게 지나가네...' },
    {
      key: 2,
      name: 'coke_0kal',
      text: '저기 오른쪽으로 가시면 극장이 있죠. 극장에서 쭉 가시면 시장이 나옵니다. 시장에서 왼쪽으로 돌면 편의점, 편의점 건녀편에 이발소, 이발소 옆 골목으로 들어가서 오른쪽 첫번째 집이 저희 집입니다.',
    },
  ]);

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

  useEffect(() => {
    fetch('/data/dataYoo/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        setCommentList(data);
      });
  }, []);

  return (
    <main className="main">
      <div className="feeds">
        <article className="article">
          <div className="articleTop">
            <div className="account">
              <div>
                <img src="./profile.png" className="profile" />
              </div>
              <div className="name">
                <span>Kangho_Yoo</span>
              </div>
            </div>
            <div>
              <i className="fas fa-ellipsis-h" />
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0OXx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
              alt="메인 이미지"
              className="artImg"
            />
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
            {commentList.map(el => {
              return <Comment key={el.key} name={el.name} text={el.text} />;
            })}
          </div>
          <div>
            <p className="mentTime">42분 전</p>
          </div>

          <form className="input">
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
      </div>
    </main>
  );
}
