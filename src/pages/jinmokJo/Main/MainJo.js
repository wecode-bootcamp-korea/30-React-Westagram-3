import React from 'react';

import Nav from '../../../components/Nav/Nav';
import Feeds from './Component/Feeds';
import Aside from './Component/Aside';

import './MainJo.scss';

function MainJo() {
  return (
    <div id="whole">
      <Nav />
      <main className="feeds">
        <Feeds />
      </main>
      <Aside />
    </div>
  );
}

export default MainJo;
