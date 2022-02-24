import React from 'react';

function Button({ name }) {
  let iconClassName = '';
  if (name === 'heartButton') {
    iconClassName = 'far fa-heart hover';
  } else if (name === 'commentButton') {
    iconClassName = 'far fa-comment hover';
  } else if (name === 'shareButton') {
    iconClassName = 'fas fa-share-square hover';
  } else if (name === 'bookmarkButton') {
    iconClassName = 'far fa-bookmark hover';
  }

  const activeHeart = e => {
    if (e.target.className.includes('far')) {
      e.target.className = 'fa-heart fa fa-solid active';
    } else {
      e.target.className = 'fa-heart far hover';
    }
  };

  const activeBookmark = e => {
    if (e.target.className.includes('far')) {
      e.target.className = 'fa-bookmark fa fa-solid';
    } else {
      e.target.className = 'fa-bookmark far hover';
    }
  };

  return (
    <button
      className={name}
      onClick={
        name === 'heartButton'
          ? activeHeart
          : name === 'bookmarkButton'
          ? activeBookmark
          : ''
      }
    >
      <i className={iconClassName} />
    </button>
  );
}

export default Button;
