import React from 'react';

// function Img({ name }) {
//   return <img alt="{name}이 프사" src="../../../../images/{name}.jpeg" />;
// }

function Profile({ name, userId, isFollow }) {
  return (
    <div className="profileContainer">
      <img
        style={isFollow === 1 ? { width: '35px', border: 'none' } : {}}
        alt={`${name}이 프사`}
        src={`/images/seulgiJun/${name}.jpeg`}
      />
      <div className="profileContainerRow">
        <p>{userId}</p>
        <p className="grayText">
          {isFollow === 0 ? '10분 전' : 'hae_dal_byeol님 외...'}
        </p>
      </div>
      <span
        className="blueSpan"
        style={isFollow === 0 ? { display: 'none' } : {}}
      >
        팔로우
      </span>
    </div>
  );
}

export default Profile;
