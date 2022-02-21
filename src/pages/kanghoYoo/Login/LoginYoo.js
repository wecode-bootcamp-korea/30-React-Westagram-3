import React from 'react';
import './LoginYoo.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';

function LoginYoo() {
  const [id, setId] = useState('');
  function handleIdInput(e) {
    setId(e.target.value);
  }

  const [pw, setPw] = useState('');
  function handlePwInput(e) {
    setPw(e.target.value);
  }

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-Yoo');
  };

  const btColor = document.getElementsByClassName('loginBtn')[0];
  function changeColor(e) {
    btColor.style.backgroundColor = 'rgb(0, 150, 250)';
    setActive(false);

    if (e.key === 'Enter') {
      goToMain();
    }
  }

  const [active, setActive] = useState(true);
  const handleKeyUp = e => {
    id.length > 5 && id.includes('@') && pw.length > 5
      ? changeColor(e)
      : setActive(true);
  };

  return (
    <div className="login-js">
      <main className="wrapClass">
        <span className="lobsterFont">Westagram</span>
        <div className="inputBox">
          <input
            onChange={handleIdInput}
            type="text"
            className="inputId"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onKeyUp={handleKeyUp}
            // onKeyPress={enterLogin}
            value={id}
          />
          <input
            onChange={handlePwInput}
            type="password"
            className="inputPw"
            placeholder="비밀번호"
            onKeyUp={handleKeyUp}
            // onKeyPress={enterLogin}
            value={pw}
          />
        </div>
        <div className="btnBox">
          <button
            className="loginBtn"
            name="button"
            onClick={goToMain}
            disabled={active}
          >
            로그인
          </button>
        </div>
        <div className="link">
          <Link to="/Main">비밀번호를 잊으셨나요?</Link>
        </div>
      </main>
    </div>
  );
}

export default LoginYoo;
