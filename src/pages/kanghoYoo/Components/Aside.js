import { Link } from 'react-router-dom';

export default function Aside() {
  return (
    <>
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
              <span className="times">2시간 전</span>
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
              <span className="flowing">_blosanrang님 외 22명이 팔로잉 중</span>
            </div>
            <Link to="/main-Yoo">팔로우</Link>
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
              <span className="flowing">kukuro_P님 외 10명이 팔로잉 중</span>
            </div>
            <Link to="/main-Yoo">팔로우</Link>
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
            <Link to="/main-Yoo">팔로우</Link>
          </div>
        </div>
      </div>
    </>
  );
}
