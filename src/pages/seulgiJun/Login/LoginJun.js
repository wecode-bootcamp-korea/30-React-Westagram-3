import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginJun.scss';

function LoginJun() {
  const navigator = useNavigate();
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const goToMain = () => {
    navigator('/main-jun');
  };

  const handleIdInput = event => {
    setIdValue(event.target.value);
  };
  const handlePwInput = event => {
    setPwValue(event.target.value);
  };

  return (
    <main className="loginMain">
      <div className="login">
        <h1>Westagram</h1>
        <form className="loginForm">
          <input
            onChange={handleIdInput}
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input
            onChange={handlePwInput}
            type="password"
            placeholder="비밀번호"
          />
          <button
            className={
              idValue.includes('@') && pwValue.length >= 5
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
