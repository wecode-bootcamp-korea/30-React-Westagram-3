import React, { useState } from 'react';

function LoginInput({ placeholder, type, name, inputValue, handleIdInput }) {
  const [passwordInputType, setPasswordInputType] = useState(type);

  const { userId, password } = inputValue;

  let currentInputValue = name === 'password' ? password : userId;

  let visiblePasswordValid = password.length > 0;

  const visiblePasswordBtn = e => {
    if (passwordInputType === 'password') {
      setPasswordInputType('text');
      e.target.innerText = '숨기기';
    } else if (passwordInputType === 'text') {
      setPasswordInputType('password');
      e.target.innerText = '비밀번호 표시';
    }
  };

  return (
    <div className="loginInput">
      <span
        className={`inputPlaceholder ${
          currentInputValue.length > 0 ? 'translateinputPlaceholder' : ''
        }`}
      >
        {placeholder}
      </span>
      <input
        className={`${
          currentInputValue.length > 0 ? 'translateLoginInput' : ''
        }`}
        type={name === 'password' ? passwordInputType : type}
        name={name}
        onChange={handleIdInput}
      />
      {name === 'password' ? (
        <button
          type="button"
          className="visiblePassword"
          onClick={visiblePasswordBtn}
        >
          {visiblePasswordValid ? '비밀번호 표시' : ''}
        </button>
      ) : null}
    </div>
  );
}

export default LoginInput;
