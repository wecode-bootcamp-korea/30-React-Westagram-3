import React, { useState } from 'react';
import Nav from '../../../components/Nav/Nav';
import './MainJung.scss';

function MainJung() {
  return (
    <>
      <Nav />
      <div className="mainPage">
        <main>
          <article>
            <div className="feed-nav">
              <div className="user">
                <img
                  alt="more"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80\\"
                />
                <h3>canon_mj</h3>
              </div>
              <div className="more">
                <img src="../../images/suinJung/more.png" />
              </div>
            </div>
            <div className="feed-image">
              <img src="https://images.unsplash.com/photo-1616738227115-954748f35c61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
            </div>
            <div className="feed-bottom">
              <div className="interactiveicon">
                <div className="icon-left">
                  <i className="fas fa-heart"></i>
                  <i className="fas fa-heart"></i>
                  <i className="fas fa-heart"></i>
                </div>
                <img src="../../images/suinJung/bookmark.png" />
              </div>
              <div className="feedlike">
                <div className="likeimage">
                  <img src="../../images/suinJung/face.png" />
                </div>
                <p>
                  <span>aineworld</span>님 <span>외 10명</span>이 좋아합니다.
                </p>
              </div>
              <div style={{ marginTop: '10px' }} className="comment">
                <div className="commentblock">
                  <div>
                    <div>
                      <p className="nickname">neceosecius</p>
                      <span>거봐 좋았잖아~~~~🙆🏻‍♀️</span>
                    </div>
                  </div>
                  <div>
                    <i className="far fa-heart"></i>
                  </div>
                </div>
                <div className="commentblock">
                  <div>
                    <p className="nickname">neceosecius</p>
                    <span>거봐 좋았잖아~~~~🙆🏻‍♀️</span>
                  </div>
                  <div>
                    <i className="far fa-heart"></i>
                  </div>
                </div>
              </div>
              <p className="aftertime">42분 전</p>
            </div>
            <div className="commentplace">
              <input
                id="comment"
                type="text"
                name="댓글"
                placeholder="댓글 달기..."
              />
              <button className="gocomment">게시</button>
            </div>
          </article>
        </main>
        <div className="right">
          <div className="main-right">
            <div className="myproflie">
              <div className="myimage">
                <img src="https://images.unsplash.com/photo-1644307358784-c6c589c9dcac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1273&q=80" />
              </div>
              <div className="myname">
                <h2 id="myname">suin_me</h2>
                <p>WeCode | 위코드</p>
              </div>
            </div>
            <div className="story right-box">
              <div className="box-title">
                <p>스토리</p>
                <p>모두 보기</p>
              </div>
              <div className="box-content">
                <img src="https://images.unsplash.com/photo-1644307358784-c6c589c9dcac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=673&q=80" />
                <div>
                  <h3>이름</h3>
                  <p>몇 분전</p>
                </div>
              </div>
              <div className="box-content">
                <img src="https://images.unsplash.com/photo-1644308414681-709b417832b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <div>
                  <h3>이름</h3>
                  <p>몇 분전</p>
                </div>
              </div>
              <div className="box-content">
                <img src="https://images.unsplash.com/photo-1644308414681-709b417832b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <div>
                  <h3>이름</h3>
                  <p>몇 분전</p>
                </div>
              </div>
              <div className="box-content">
                <img src="https://images.unsplash.com/photo-1644308414681-709b417832b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <div>
                  <h3>이름</h3>
                  <p>몇 분전</p>
                </div>
              </div>
              <div className="box-content">
                <img src="https://images.unsplash.com/photo-1644308414681-709b417832b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <div>
                  <h3>이름</h3>
                  <p>몇 분전</p>
                </div>
              </div>
              <div className="box-content">
                <img src="https://images.unsplash.com/photo-1644308414681-709b417832b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <div>
                  <h3>이름</h3>
                  <p>몇 분전</p>
                </div>
              </div>
            </div>
            <div className="recommend right-box">
              <div className="box-title">
                <p>회원님을 위한 추천</p>
                <p>모두 보기</p>
              </div>
              <div className="box-content">
                <img src="https://images.unsplash.com/photo-1644308414681-709b417832b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <div>
                  <h3>이름</h3>
                  <p>몇 분전</p>
                </div>
                <p className="follow">팔로우</p>
              </div>
              <div className="box-content">
                <img src="https://images.unsplash.com/photo-1644308414681-709b417832b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <div>
                  <h3>이름</h3>
                  <p>몇 분전</p>
                </div>
                <p className="follow">팔로우</p>
              </div>
              <div className="box-content">
                <img src="https://images.unsplash.com/photo-1644308414681-709b417832b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                <div>
                  <h3>이름</h3>
                  <p>몇 분전</p>
                </div>
                <p className="follow">팔로우</p>
              </div>
            </div>
            <div className="footer">
              <p>
                instagram 정보 | 지원 | 홍보센터 | API
                <br />
                채용 정보 | 개인정보처리방침 | 약관
                <br />
                디렉터리 | 프로필 | 해시태그 | 언어
              </p>
              <br />
              <p>&copy; 2019 INSTAGRAM</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainJung;
