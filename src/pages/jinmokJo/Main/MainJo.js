import React, { useState, useEffect } from 'react';

import Nav from '../../../components/Nav/Nav';
import Feeds from './Component/Feeds';
import Aside from './Component/Aside';

import './MainJo.scss';

function MainJo() {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/jinmokJo/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setFeedList(res));
  }, []);

  const updateFeeds = () => {
    return feedList.map(feed => {
      return (
        <Feeds
          key={feed.id}
          name={feed.userName}
          nickname={feed.userNickname}
          profileImg={feed.profileImg}
          contentImg={feed.imageUrl}
          likeCount={feed.likedCount}
          content={feed.content}
          comments={feed.comments}
        />
      );
    });
  };

  return (
    <div id="whole">
      <Nav />
      <main className="feeds">{updateFeeds()}</main>
      <Aside />
    </div>
  );
}

export default MainJo;
