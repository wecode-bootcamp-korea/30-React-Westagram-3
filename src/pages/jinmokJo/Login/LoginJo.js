import React, { useState } from 'react';

import LoginInput from './Components/LoginInput';

import './LoginJo.scss';

function LoginJo() {
  const [inputValue, setInputValue] = useState({ userId: '', password: '' });

  const handleLoginInput = e => {
    if (e.target.type === 'text') {
      setInputValue(prevState => ({
        userId: e.target.value,
        password: inputValue.password,
      }));
    } else if (e.target.type === 'password') {
      setInputValue(prevState => ({
        userId: inputValue.userId,
        password: e.target.value,
      }));
    }
  };

  return (
    <main className="Login">
      <div className="loginMain">
        <h1 className="instagramFont title">Westagram</h1>
        <form action="" method="post" id="loginForm">
          <LoginInput
            placeholder="이메일"
            type="text"
            inputValue={inputValue}
            handleIdInput={handleLoginInput}
          />
          <LoginInput
            placeholder="비밀번호"
            type="password"
            name="password"
            inputValue={inputValue}
            handleIdInput={handleLoginInput}
          />
          <button
            type="submit"
            form="loginForm"
            className={`loginBtn ${
              inputValue.userId.includes('@') && inputValue.password.length >= 5
                ? 'activeLoginBtn'
                : ''
            }`}
            disabled={
              inputValue.userId.includes('@') && inputValue.password.length >= 5
                ? false
                : true
            }
          >
            로그인
          </button>
        </form>
      </div>
      <a href="#" className="find-password">
        비밀번호를 잊어셨나요?
      </a>
    </main>
  );
}

export default LoginJo;
