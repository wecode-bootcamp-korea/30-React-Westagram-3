import React from "react";

function Nav() {
  return (
    <nav className="navOfMain">
      <div className="navRow">
        <img alt="instagram logo" src="../../../images/instagram.png" />
        <span>Westagram</span>
      </div>

      <div className="navRow">
        <img
          className="searchIcon"
          alt="search icon"
          src="../../../images/search.png"
        />
        <input placeholder="검색" />
      </div>

      <div className="navRow">
        <img
          alt="compass icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
        />
        <img
          alt="heart icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
        />
        <img
          alt="user icon"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
        />
      </div>
    </nav>
  );
}

export default Nav;
