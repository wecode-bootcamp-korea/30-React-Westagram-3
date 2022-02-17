import React from 'react';
import './MainYoo.scss';
//import { Link } from 'react-router-dom';
import Nav from '../../../components/Nav/Nav';

function MainYoo() {
  return (
    <div className="wrap">
      <Nav />
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
                <button className="heart" onclick="toggleImg">
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
              <p className="mentsWrap">
                <span className="commentId oneId">vertex7785</span>
                <span className="comment cmt1">
                  시간이 벌써 이렇게 지났네...
                </span>
                <span className="more"> 더 보기</span>
              </p>
              <p className="mentsWrap">
                <span className="commentId twoId">coke_0kal</span>
                <span className="comment cmt2">
                  스파게티가 생각이 나는 날이야~!
                </span>
              </p>
            </div>
            <div>
              <p className="mentTime">42분 전</p>
            </div>

            <div className="input">
              <input
                type="text"
                className="commentInput"
                value=""
                onkeyup="enterkey()"
                placeholder="댓글 달기..."
              />
              <input
                type="button"
                className="send"
                onclick="mentSend();"
                value="게시"
              />
            </div>
          </article>
        </div>
        <div className="mainRight">
          <div className="right1">
            <div className="anotherProfile">
              <img
                src="https://media.vlpt.us/images/inyong_pang/post/f0ea605d-c2d9-460c-aedc-a0ec77e6759f/wecode.png"
                alt="다른 프로필"
                className="profiles"
              />
            </div>
            <div className="anotherInfo">
              <p id="another-name">wecode_bootcamp</p>
              <span id="en-name" className="names">
                WeCode
              </span>
              <span id="ko-name" className="names">
                위코드
              </span>
            </div>
          </div>
          <div className="right2">
            <div className="storyTop">
              <span className="top1">스토리</span>
              <span className="top2">모두 보기</span>
            </div>
            <div>
              <div className="stories">
                <div className="anotherProfile">
                  <img
                    src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="다른 프로필"
                    className="anotherImg"
                  />
                </div>
                <div className="anotherInfo">
                  <p>kali_s</p>
                  <span className="times">30분 전</span>
                </div>
              </div>
              <div className="stories">
                <div className="anotherProfile">
                  <img
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aHVtYW58ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                    alt="다른 프로필"
                    className="anotherImg"
                  />
                </div>
                <div className="anotherInfo">
                  <p>yum_s</p>
                  <span className="times">16분 전</span>
                </div>
              </div>
              <div className="stories">
                <div className="anotherProfile">
                  <img
                    src="https://images.unsplash.com/photo-1593529467220-9d721ceb9a78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="다른 프로필"
                    className="anotherImg"
                  />
                </div>
                <div className="anotherInfo">
                  <p>natali_A</p>
                  <span className="times">14분 전</span>
                </div>
              </div>
              <div className="stories">
                <div className="anotherProfile">
                  <img
                    src="https://images.unsplash.com/photo-1539640038819-57bb520c7d2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGh1bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="다른 프로필"
                    className="anotherImg"
                  />
                </div>
                <div className="anotherInfo">
                  <p>cho_ha</p>
                  <span className="times">3시간 전</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right3">
            <div className="storyTop">
              <span className="top1">회원님을 위한 추천</span>
              <span className="top2">모두 보기</span>
            </div>
            <div>
              <div className="recomment">
                <div className="anotherProfile">
                  <img
                    src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fCUwOHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="다른 프로필"
                    className="anotherImg2"
                  />
                </div>
                <div className="anotherRecomment">
                  <p>de_lo</p>
                  <span className="flowing">
                    _blosanrang님 외 25명이 팔로잉 중
                  </span>
                </div>
                <a href="#">팔로우</a>
              </div>
              <div className="recomment">
                <div className="anotherProfile">
                  <img
                    src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fCUwOHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                    alt="다른 프로필"
                    className="anotherImg2"
                  />
                </div>
                <div className="anotherRecomment">
                  <p>Caldit_q</p>
                  <span className="flowing">
                    kukuro_P님 외 10명이 팔로잉 중
                  </span>
                </div>
                <a href="#">팔로우</a>
              </div>
              <div className="recomment">
                <div className="anotherProfile">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8JTA4cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                    alt="다른 프로필"
                    className="anotherImg2"
                  />
                </div>
                <div className="anotherRecomment">
                  <p>tcp_best</p>
                  <span className="flowing">
                    js_lover_html님 외 2명이 팔로잉 중
                  </span>
                </div>
                <a href="#">팔로우</a>
              </div>
            </div>
          </div>
          <footer className="footer">
            <p>
              Westargram 정보 지원 홍보센터 API 채용정보 개인정보정보처리방침
              약관 디렉터리 프로필 해시태그 언어
            </p>
            <span>&copy; 2022 WESTARGRAM</span>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default MainYoo;
