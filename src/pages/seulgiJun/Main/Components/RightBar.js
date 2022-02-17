import React from 'react';

import Box from './Box';
import GrayText from './GrayText';

function RightBar() {
  return (
    <>
      <div className="rightBar">
        <div className="profileContainer">
          <img alt="햇님이 프사" src="/images/seulgiJun/햇님.jpeg" />
          <div className="profileContainerRow">
            <p className="user">hae_nim</p>
            <p className="grayText">햇님 | 고양이</p>
          </div>
        </div>

        <Box name={'달님'} userId={'dal_nim'} isFollow={0} />
        <Box name={'별님'} userId={'byeol_nim'} isFollow={1} />

        <GrayText />
      </div>
    </>
  );
}

export default RightBar;
