import React from 'react';
import './LoginYoo.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';

function LoginYoo() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  function handleIdInput(e) {
    setId(e.target.value);
  }

  function handlePwInput(e) {
    setPw(e.target.value);
  }

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-Yoo');
  };

  return (
    <div className="login-js">
      <main className="wrapClass">
        <span className="lobsterFont">Westagram</span>
        <div className="inputWrap">
          <input
            onChange={handleIdInput}
            type="text"
            className="id input"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={id}
          />
          <input
            onChange={handlePwInput}
            type="password"
            className="pw input"
            placeholder="비밀번호"
            value={pw}
          />
        </div>
        <div className="bt">
          <button name="button" onClick={goToMain}>
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
