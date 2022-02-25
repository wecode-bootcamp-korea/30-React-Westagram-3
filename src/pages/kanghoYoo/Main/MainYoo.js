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
      <main className="main">
        {feedList.map((el, i) => {
          const feed = feedList[i];
          return (
            <div className="feeds" key={i}>
              <Feed
                key={feed.id}
                userName={feed.userName}
                userImg={feed.userImg}
                feedImg={feed.feedImg}
                commentDataList={feed.commentList}
              />
            </div>
          );
        })}
      </main>
      <div className="mainRight">
        <Aside />
        <Footer />
      </div>
    </>
  );
}

export default MainYoo;
