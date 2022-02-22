import React, { useEffect, useState } from 'react';

import './MainJun.scss';

import Nav from '../../../components/Nav/Nav';
import Article from './Components/Article';
import RightBar from './Components/RightBar';

function MainJun() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/feedData.json', { method: 'GET' })
      .then(res => res.json())
      .then(data => setFeedData(data));
  }, []);

  return (
    <div className="mainStyle">
      <Nav />
      <main className="mainMain">
        <div className="feedContainer">
          {feedData.map(feed => (
            <Article key={feed.id} feed={feed} />
          ))}
        </div>
        <RightBar />
      </main>
    </div>
  );
}

export default MainJun;
