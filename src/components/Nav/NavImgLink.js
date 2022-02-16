import React from 'react';

function NavImgLink(props) {
  return (
    <a href="#">
      <img
        alt={props.name}
        src={`https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/${props.name}.png`}
      />
    </a>
  );
}

export default NavImgLink;
