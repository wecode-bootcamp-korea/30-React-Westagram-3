import React from 'react';
import './LoginYoo.scss';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';

function LoginYoo() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [active, setActive] = useState(true);
  const navigate = useNavigate();

  function handleIdInput(e) {
    const { value } = e.target;
    setId(value);
  }

  function handlePwInput(e) {
    const { value } = e.target;
    setPw(value);
  }

  const handleKeyUp = e => {
    id.length > 5 && id.includes('@') && pw.length > 5
      ? setActive(false)
      : setActive(true);
  };

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

  return (
    <div className="login">
      <main className="wrapClass">
        <span className="lobsterFont">Westagram</span>
        <form onSubmit={goToMain} onKeyUp={handleKeyUp}>
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
              className={
                active === true ? 'inactiveLoginBtn' : 'activeLoginBtn'
              }
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
