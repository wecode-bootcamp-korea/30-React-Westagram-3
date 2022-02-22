import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import './LoginJung.scss';
import '../../../styles/common.scss';
import { type } from '@testing-library/user-event/dist/type';

function LoginJung() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-jung');
  };

  const [values, setValues] = useState({ Id: '', Password: '' });

  const handleInput = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleBtn = !(values.Id.includes('@') && values.Password.length > 4);

  const pwInput = useRef();

  const focusPw = e => {
    if (e.code === 'Enter') {
      pwInput.current.focus();
    }
  };
  return (
    <>
      <div className="login">
        <main className="loginBox">
          <h1 className="logo">Westagram</h1>
          <div className="loginText">
            <form>
              <input
                name="Id"
                value={values.Id}
                className="inputBox"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleInput}
                onKeyUp={focusPw}
                autoFocus
              />
              <input
                name="Password"
                value={values.Password}
                className="inputBox"
                type="password"
                placeholder="비밀번호"
                ref={pwInput}
                onChange={handleInput}
              />
              <button
                name="data"
                className="log-btn"
                disabled={handleBtn}
                onClick={goToMain}
                style={{ cursor: handleBtn ? 'default' : 'pointer' }}
              >
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
