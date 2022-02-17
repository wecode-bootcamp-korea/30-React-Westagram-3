import React from 'react';

import './MainJun.scss';

import Nav from '../../../components/Nav/Nav';
import Article from './Components/Article';
import RightBar from './Components/RightBar';

function MainJun() {
  return (
    <div className="mainStyle">
      <Nav />
      <main className="feedMain">
        <Article />
        <RightBar />
      </main>
    </div>
  );
}

export default MainJun;
