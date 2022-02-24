import React from 'react';

function Aside() {
  return (
    <aside id="storyRecommend">
      <div className="storyRecommendSection">
        <div className="profilesHeader">
          <div className="profiles asideMyIdProfile">
            <a href="#" className="profileImg">
              <img src="https://media.vlpt.us/images/inyong_pang/post/f0ea605d-c2d9-460c-aedc-a0ec77e6759f/wecode.png" />
            </a>
            <div className="idText">
              <span className="bold600">wecode_bootcamp</span>
              <span>WeCode - 위코드</span>
            </div>
          </div>
          <button className="asideBtns idChange">전환</button>
        </div>
        <div id="story">
          <div className="asideHeader">
            <span className="asideTitle bold600">스토리</span>
            <button className="asideBtns">모두 보기</button>
          </div>
          <div className="storys">
            <div className="profiles storyProfiles">
              <a href="#" className="profileImg">
                <img
                  src="https://images.unsplash.com/photo-1640622307904-f4ac0c56601e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
              </a>
              <div className="idText">
                <span className="bold600">alexishyuni</span>
                <span>2시간 전</span>
              </div>
            </div>
            <div className="profiles storyProfiles">
              <a href="#" className="profileImg">
                <img
                  src="https://images.unsplash.com/photo-1644325781022-3e1177d11bfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80"
                  alt=""
                />
              </a>
              <div className="idText">
                <span className="bold600">jminkeek</span>
                <span>1시간 전</span>
              </div>
            </div>
            <div className="profiles storyProfiles">
              <a href="#" className="profileImg">
                <img
                  src="https://images.unsplash.com/photo-1644347542604-2ae09ac7f24a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
              </a>
              <div className="idText">
                <span className="bold600">drink_eat_drink</span>
                <span>13분 전</span>
              </div>
            </div>
            <div className="profiles storyProfiles">
              <a href="#" className="profileImg">
                <img
                  src="https://images.unsplash.com/photo-1644351032803-9c6f42458ea7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2871&q=80"
                  alt=""
                />
              </a>
              <div className="idText">
                <span className="bold600">beeb_ssunie</span>
                <span>6시간 전</span>
              </div>
            </div>
          </div>
        </div>
        <div id="recommendSection">
          <div className="asideHeader">
            <span className="asideTitle bold600">회원님을 위한 추천</span>
            <button className="asideBtns">모두 보기</button>
          </div>
          <div className="recommends">
            <div className="recommendProfileFollow">
              <div className="profiles recommendProfiles">
                <a href="#" className="profileImg">
                  <img
                    src="https://images.unsplash.com/photo-1644346271346-b25c5800d56a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769&q=80"
                    alt=""
                  />
                </a>
                <div className="idText">
                  <span className="bold600">bowerbird_sym</span>
                  <span>회원님을 팔로우합니다</span>
                </div>
              </div>
              <button className="asideBtns idChange">팔로우</button>
            </div>
            <div className="recommendProfileFollow">
              <div className="profiles recommendProfiles">
                <a href="#" className="profileImg">
                  <img
                    src="https://images.unsplash.com/photo-1644370849911-75fe5eba6ce2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                  />
                </a>
                <div className="idText">
                  <span className="bold600">baekyounghee89</span>
                  <span>회원님을 팔로우합니다</span>
                </div>
              </div>
              <button className="asideBtns idChange">팔로우</button>
            </div>
            <div className="recommendProfileFollow">
              <div className="profiles recommendProfiles">
                <a href="#" className="profileImg">
                  <img
                    src="https://images.unsplash.com/photo-1644371972225-4917efaa3958?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                  />
                </a>
                <div className="idText">
                  <span className="bold600">smileday.wj</span>
                  <span>회원님을 팔로우합니다</span>
                </div>
              </div>
              <button className="asideBtns idChange">팔로우</button>
            </div>
          </div>
        </div>
        <div id="asideBottom" className="bold600">
          <nav id="asideBottomNav">
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
