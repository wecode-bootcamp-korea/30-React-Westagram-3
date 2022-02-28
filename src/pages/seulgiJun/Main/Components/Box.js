import React from 'react';

import Label from './Label';
import Profile from './Profile';

function Box({ data }) {
  return (
    <div className="boxContainer">
      <Label />
      <Profile profileData={data} />
      <Profile profileData={data} />
      <Profile profileData={data} />
      <Profile profileData={data} />
    </div>
  );
}

export default Box;
