import React from 'react';

function Aside() {
  return (
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
  );
}

export default Aside;
