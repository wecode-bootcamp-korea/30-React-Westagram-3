import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginJun.scss';

const ERROR_MESSAGE = {
  INVALID_USER: '존재하지 않는 사용자입니다.',
  INVALID_PASSWORD: '잘못된 비밀번호입니다.',
};

function LoginJun() {
  const navigator = useNavigate();
  const [inputValue, setInputValue] = useState({ id: '', password: '' });
  const isValid =
    inputValue.id.includes('@') && inputValue.password.length >= 5;

  const signReqest = event => {
    event.preventDefault();
    fetch('http://172.23.59.236:8080/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValue.id,
        password: inputValue.password,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.token) {
          localStorage.setItem('token', result.token);
        }
        if (result.message) {
          alert(ERROR_MESSAGE[result.message]);
        }
      });
    navigator('/main-jun');
  };

  const handleInput = event => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <main className="loginMain">
      <div className="login">
        <h1>Westagram</h1>
        <form className="loginForm">
          <input name="id" onChange={handleInput} placeholder="이메일" />
          <input
            name="password"
            onChange={handleInput}
            type="password"
            placeholder="비밀번호"
          />
          <button
            className={isValid ? 'activeBtn' : 'inactiveBtn'}
            disabled={!isValid}
            onClick={signReqest}
          >
            로그인
          </button>
        </form>
        <a href="#">비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
}

export default LoginJun;
