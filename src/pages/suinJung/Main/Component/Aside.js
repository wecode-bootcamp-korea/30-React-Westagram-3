import AsideBox from './AsideBox';

function Aside() {
  return (
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
          <AsideBox />
          <AsideBox />
          <AsideBox />
          <AsideBox />
          <AsideBox />
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
  );
}

export default Aside;
