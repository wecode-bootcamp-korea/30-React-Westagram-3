// import React, { useEffect } from 'react';
import './MainYoo.scss';
import Nav from '../../../components/Nav/Nav';
import Main from '../Components/Main';
import Aside from '../Components/Aside';
import Footer from '../Components/Footer';

function MainYoo() {
  return (
    <>
      <Nav />
      <Main />
      <div className="mainRight">
        <Aside />
        <Footer />
      </div>
    </>
  );
}

export default MainYoo;
