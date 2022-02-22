import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginJun.scss';

function LoginJun() {
  const navigator = useNavigate();
  const [inputValue, setInputValue] = useState({ id: '', password: '' });

  const goToMain = () => {
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
          <input
            name="id"
            onChange={handleInput}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            name="password"
            onChange={handleInput}
            type="password"
            placeholder="비밀번호"
          />
          <button
            className={
              inputValue['id'].includes('@') &&
              inputValue['password'].length >= 5
                ? 'activeBtn'
                : 'inactiveBtn'
            }
            onClick={goToMain}
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
