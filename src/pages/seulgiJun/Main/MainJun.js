import React, { useEffect, useState } from 'react';

import Nav from '../../../components/Nav/Nav';
import Article from './Components/Article';
import RightBar from './Components/RightBar';

import './MainJun.scss';

function MainJun() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/seulgiJun/feedData.json', {
      method: 'GET',
    })
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
