import { useState } from 'react';

export default function Main() {
  const commentValue = [
    { name: 'vertex7785', text: '시간이 되게 빠르게 지나가네...' },
    {
      name: 'coke_0kal',
      text: '저기 오른쪽으로 가시면 극장이 있죠. 극장에서 쭉 가시면 시장이 나옵니다. 시장에서 왼쪽으로 돌면 편의점, 편의점 건녀편에 이발소, 이발소 옆 골목으로 들어가서 오른쪽 첫번째 집이 저희 집입니다.',
    },
  ];

  const [comment, setComment] = useState('');
  const [arrComment, setArrComment] = useState([]);

  function commentUpload(e) {
    if (comment !== '') {
      arrComment.push(comment);
      setArrComment(arrComment);
      setComment('');
    }

    // setArrComment(...arrComment, (e.text = e.target.value));
  }

  function commentInput(e) {
    setComment(e.target.value);
  }

  const enter = e => {
    if (e.key == 'enter') {
      commentUpload(e);
      console.log('hi');
    } else {
      console.log('안됌');
    }
  };

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
            {commentValue.map(el => {
              return (
                <li className="mentsWrap">
                  <span className="commentId">{el.name}</span> {el.text}
                </li>
              );
            })}
            {arrComment.map((el, Index) => {
              return (
                <li className="mentsWrap">
                  <span className="commentId">Kangho_Yoo</span> {el}
                </li>
              );
            })}
          </div>
          <div className="comments" />
          <div>
            <p className="mentTime">42분 전</p>
          </div>

          <div className="input">
            <input
              type="text"
              className="commentInput"
              value={comment}
              onChange={commentInput}
              placeholder="댓글 달기..."
              onProgress={enter}
            />
            <input
              type="button"
              className="send"
              onClick={commentUpload}
              value="게시"
            />
          </div>
        </article>
      </div>
    </main>
  );
}
