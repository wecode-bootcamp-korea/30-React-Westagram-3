import React from 'react';
import NavImgLink from './NavImgLink';
import './Nav.scss';

function Nav(props) {
  return (
    <>
      <nav className="navigationMain">
        <div className="navBox">
          <div className="instagramIcon">
            <i className="fab fa-instagram"></i>
            <h1 className="instagramFont">Westagram</h1>
          </div>
          <div className="searchBox">
            <input type="text" name="search" className="search" />
            <span className="searchPlaceholder">
              <i className="fas fa-search"></i> 검색
            </span>
          </div>
          <div className="navIcons">
            <NavImgLink name="explore" />
            <NavImgLink name="heart" />
            <NavImgLink name="profile" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
