import React from 'react';

import Label from './Label';
import Profile from './Profile';

function Box({ name, userId, isFollow }) {
  return (
    <div className="boxContainer">
      <Label />
      <Profile name={name} userId={userId} isFollow={isFollow} />
      <Profile name={name} userId={userId} isFollow={isFollow} />
      <Profile name={name} userId={userId} isFollow={isFollow} />
      <Profile name={name} userId={userId} isFollow={isFollow} />
    </div>
  );
}

export default Box;
