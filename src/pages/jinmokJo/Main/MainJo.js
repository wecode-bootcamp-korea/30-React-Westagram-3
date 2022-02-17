import React from 'react';

import Nav from '../../../components/Nav/Nav';

import './MainJo.scss';

function MainJo() {
  return (
    <div id="whole">
      <Nav />
      <main className="feeds">
        <article className="feedArticle">
          <div className="articleHeader">
            <div className="profiles feeds_my_id">
              <a href="#" className="profile-img">
                <span>&gt;wecode</span>
              </a>
              <div className="id_text">
                <span className="bold">wecode_bootcamp</span>
                <span>WeCode - 위코드</span>
              </div>
            </div>
            <a className="article-header-menu" href="#">
              <i className="fas fa-ellipsis-h"></i>
            </a>
          </div>
          <div className="contents"></div>
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
                <button
                  className="bookmarkButton hover"
                  onClick={console.log()}
                >
                  <i className="far fa-bookmark"></i>
                </button>
              </div>
            </div>
            <div className="like-section">
              <div className="like-profile"></div>
              <span>
                <span className="like-representive bold">seungyoun_iain</span>님
                외 <span className="like-people bold">4명</span>이 좋아합니다
              </span>
            </div>
            <div className="article-text">
              <span>
                <span className="bold">wecode_bootcamp</span>
                "위코드는 단순 교육업체가 아닌 개발자 커뮤니티입니다. Wecode에서
                배우고 저는 총 5개 회사에서 오퍼를 받았습니다." - Wecode 졸업생
                김병진님 인터뷰 -
              </span>
            </div>
            <button className="reply">댓글</button>
            <div className="upload-time">54분 전</div>
          </div>
          <div className="comments">
            <form id="comments-form" method="post" action="">
              <button className="emoji" type="button">
                <i className="far fa-smile"></i>
              </button>
              <textarea
                name="comments-area"
                id="comments-area"
                placeholder="댓글 달기..."
                autoComplete="off"
                autoCorrect="off"
                onKeyDown={console.log()}
                onKeyUp={console.log()}
              ></textarea>
              <button
                id="comments-submit"
                type="submit"
                form="comments-form"
                disabled
              >
                게시
              </button>
            </form>
          </div>
        </article>
      </main>
      <aside id="story-recommand">
        <div className="story-recommand-section">
          <div className="profiles-header">
            <div className="profiles aside_my_id_profile">
              <a href="#" className="profile-img">
                <span>&gt;wecode</span>
              </a>
              <div className="id_text">
                <span className="bold_700">wecode_bootcamp</span>
                <span>WeCode - 위코드</span>
              </div>
            </div>
            <button className="aside-btns id-change">전환</button>
          </div>
          <div id="story">
            <div className="aside-header">
              <span className="aside-title bold_700">스토리</span>
              <button className="aside-btns">모두 보기</button>
            </div>
            <div className="storys">
              <div className="profiles story-profiles">
                <a href="#" className="profile-img">
                  <img
                    src="https://images.unsplash.com/photo-1640622307904-f4ac0c56601e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                  />
                </a>
                <div className="id_text">
                  <span className="bold_700">alexishyuni</span>
                  <span>2시간 전</span>
                </div>
              </div>
              <div className="profiles story-profiles">
                <a href="#" className="profile-img">
                  <img
                    src="https://images.unsplash.com/photo-1644325781022-3e1177d11bfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
                    alt=""
                  />
                </a>
                <div className="id_text">
                  <span className="bold_700">jminkeek</span>
                  <span>1시간 전</span>
                </div>
              </div>
              <div className="profiles story-profiles">
                <a href="#" className="profile-img">
                  <img
                    src="https://images.unsplash.com/photo-1644347542604-2ae09ac7f24a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                  />
                </a>
                <div className="id_text">
                  <span className="bold_700">drink_eat_drink</span>
                  <span>13분 전</span>
                </div>
              </div>
              <div className="profiles story-profiles">
                <a href="#" className="profile-img">
                  <img
                    src="https://images.unsplash.com/photo-1644351032803-9c6f42458ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2871&q=80"
                    alt=""
                  />
                </a>
                <div className="id_text">
                  <span className="bold_700">beeb_ssunie</span>
                  <span>6시간 전</span>
                </div>
              </div>
            </div>
          </div>
          <div id="recommand-section">
            <div className="aside-header">
              <span className="aside-title bold_700">회원님을 위한 추천</span>
              <button className="aside-btns">모두 보기</button>
            </div>
            <div className="recommands">
              <div className="recommand-profile-follow">
                <div className="profiles recommand-profiles">
                  <a href="#" className="profile-img">
                    <img
                      src="https://images.unsplash.com/photo-1644346271346-b25c5800d56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
                      alt=""
                    />
                  </a>
                  <div className="id_text">
                    <span className="bold_700">bowerbird_sym</span>
                    <span>회원님을 팔로우합니다</span>
                  </div>
                </div>
                <button className="aside-btns id-change">팔로우</button>
              </div>
              <div className="recommand-profile-follow">
                <div className="profiles recommand-profiles">
                  <a href="#" className="profile-img">
                    <img
                      src="https://images.unsplash.com/photo-1644370849911-75fe5eba6ce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                      alt=""
                    />
                  </a>
                  <div className="id_text">
                    <span className="bold_700">baekyounghee89</span>
                    <span>회원님을 팔로우합니다</span>
                  </div>
                </div>
                <button className="aside-btns id-change">팔로우</button>
              </div>
              <div className="recommand-profile-follow">
                <div className="profiles recommand-profiles">
                  <a href="#" className="profile-img">
                    <img
                      src="https://images.unsplash.com/photo-1644371972225-4917efaa3958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                      alt=""
                    />
                  </a>
                  <div className="id_text">
                    <span className="bold_700">smileday.wj</span>
                    <span>회원님을 팔로우합니다</span>
                  </div>
                </div>
                <button className="aside-btns id-change">팔로우</button>
              </div>
            </div>
          </div>
          <div id="aside_bottom" className="bold_700">
            <nav id="aside_bottom_nav">
              <ul>
                <li>
                  <a href="#">소개</a>
                </li>
                <li>
                  <a href="#">도움말</a>
                </li>
                <li>
                  <a href="#">홍보 센터</a>
                </li>
                <li>
                  <a href="#">API</a>
                </li>
                <li>
                  <a href="#">채용 정보</a>
                </li>
                <li>
                  <a href="#">개인정보처리방침</a>
                </li>
                <li>
                  <a href="#">약관</a>
                </li>
                <li>
                  <a href="#">위치</a>
                </li>
                <li>
                  <a href="#">인기 계정</a>
                </li>
                <li>
                  <a href="#">해시태그</a>
                </li>
                <li>
                  <a href="#">언어</a>
                </li>
              </ul>
            </nav>
            <span>© 2022 WESTAGRAM FROM WECODE</span>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default MainJo;
