// import React, { useEffect } from 'react';
import './MainYoo.scss';
import Nav from '../../../components/Nav/Nav';
import Feed from '../Components/Feed';
import Aside from '../Components/Aside';
import Footer from '../Components/Footer';
import { useState, useEffect } from 'react';

function MainYoo() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/dataYoo/feedData.json', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(data => {
        setFeedList(data);
      });
  }, []);

  return (
    <>
      <Nav />
      <div>
        {feedList.map((el, id) => {
          return (
            <Feed
              key={id}
              userName={el.userName}
              userImg={el.userImg}
              feedImg={el.feedImg}
              commentDataList={el.commentList}
            />
          );
        })}
      </div>
      <div className="mainRight">
        <Aside />
        <Footer />
      </div>
    </>
  );
}

export default MainYoo;
