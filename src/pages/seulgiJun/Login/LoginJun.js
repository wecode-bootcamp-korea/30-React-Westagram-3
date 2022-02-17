import React from 'react';
import { useNavigate } from 'react-router-dom';

import './LoginJun.scss';

function LoginJun() {
  const navigator = useNavigate();

  const goToMain = () => {
    navigator('/main');
  };

  return (
    <main className="loginMain">
      <div className="login">
        <h1>Westagram</h1>
        <form className="loginForm">
          <input placeholder="전화번호, 사용자 이름 또는 이메일"></input>
          <input type="password" placeholder="비밀번호" />
          <button onClick={goToMain}>로그인</button>
        </form>
        <a href="">비밀번호를 잊으셨나요?</a>
      </div>
    </main>
  );
}

export default LoginJun;
