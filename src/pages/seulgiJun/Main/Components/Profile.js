import React from 'react';

// Img 컴포넌트를 만드는 게 좋을까요?...
// function Img({ name }) {
//   return <img alt="{name}이 프사" src="../../../../images/{name}.jpeg" />;
// }

function Profile({ name, userId, isFollow }) {
  return (
    <div className="profileContainer">
      <img
        className={isFollow === 1 ? 'followList' : ''}
        alt={`${name}이 프사`}
        src={`/images/seulgiJun/${name}.jpeg`}
      />
      <div className="profileContainerRow">
        <p>{userId}</p>
        <p className="grayText">
          {isFollow === 0 ? '10분 전' : 'hae_dal_byeol님 외...'}
        </p>
      </div>
      <span className={`blueSpan${isFollow === 0 ? ' invisible' : ''}`}>
        팔로우
      </span>
    </div>
  );
}

export default Profile;
