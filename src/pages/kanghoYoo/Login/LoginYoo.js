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
  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.57.210:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        name: 'kangho',
        email: id,
        password: pw,
        phone_number: '01023122312',
      }),
    })
      .then(response => response.json())
      .then(result => result.token && navigate('/main-Yoo'));
  };

  const [active, setActive] = useState(true);
  const handleKeyUp = e => {
    id.length > 5 && id.includes('@') && pw.length > 5
      ? setActive(false) && goToMain(e)
      : setActive(true);
  };

  return (
    <div className="login">
      <main className="wrapClass">
        <span className="lobsterFont">Westagram</span>
        <form onSubmit={!active && goToMain} onKeyUp={handleKeyUp}>
          <div className="inputBox">
            <input
              onChange={handleIdInput}
              type="text"
              className="inputId"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              value={id}
            />
            <input
              onChange={handlePwInput}
              type="password"
              className="inputPw"
              placeholder="비밀번호"
              value={pw}
            />
          </div>
          <div className="btnBox">
            <button
              className="loginBtn"
              type="button"
              name="button"
              onClick={goToMain}
              disabled={active}
            >
              로그인
            </button>
          </div>
        </form>
        <div className="link">
          <Link to="/login-yoo">비밀번호를 잊으셨나요?</Link>
        </div>
      </main>
    </div>
  );
}

export default LoginYoo;
