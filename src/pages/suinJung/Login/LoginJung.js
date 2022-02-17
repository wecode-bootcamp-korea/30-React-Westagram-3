import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginJung.scss';

function LoginJung() {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-jung');
  };
  return (
    <>
      <div className="loginContainer">
        <main className="loginBox">
          <h1 className="logo">Westagram</h1>
          <div className="loginText">
            <form>
              <input
                id="name"
                className="inputBox"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
              />
              <input
                id="password"
                className="inputBox"
                type="password"
                placeholder="비밀번호"
              />
              <button name="data" className="log-btn" onClick={goToMain}>
                로그인
              </button>
            </form>
          </div>
          <p className="findPass">
            <a href="#">비밀번호를 잊으셨나요?</a>
          </p>
        </main>
      </div>
    </>
  );
}

export default LoginJung;
