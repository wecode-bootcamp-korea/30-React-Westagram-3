// import React, { useEffect } from 'react';
import './MainYoo.scss';
import Nav from '../../../components/Nav/Nav';
import Main from '../Components/Main';
import Aside from '../Components/Aside';
import Footer from '../Components/Footer';

function MainYoo() {
  // useEffect(() => {
  //   fetch('http://localhost:3000/data/commentData.json')
  //     .then(response => response.json())
  //     .then(data => {
  //       setComment(data);
  //     });
  // }, []);

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
