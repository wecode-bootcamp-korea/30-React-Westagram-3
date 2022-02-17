import React from 'react';

import LoginInput from './Components/LoginInput';

import './LoginJo.scss';

function LoginJo() {
  return (
    <main className="Login">
      <div className="loginMain">
        <h1 className="instagramFont title">Westagram</h1>
        <form action="" method="post" id="loginForm">
          <LoginInput
            placeholder="전화번호, 사용자 이름 또는 이메일"
            type="text"
          />
          <LoginInput placeholder="비밀번호" type="password" name="password" />
          <button
            type="submit"
            form="loginForm"
            class="loginBtn"
            onClick={console.log('와 햇갈리네')}
            disabled
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
