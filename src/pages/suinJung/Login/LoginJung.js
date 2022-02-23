import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import './LoginJung.scss';
import '../../../styles/common.scss';

function LoginJung() {
  const [values, setValues] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const goToMain = () => {
    // fetch('http://10.58.5.208:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: values.email,
    //     password: values.password,
    //     phone_number: '01092079004',
    //     first_name: 'jung',
    //     last_name: 'suin',
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => console.log('결과: ', result));
    navigate('/main-jung');
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleBtn = !(values.email.includes('@') && values.password.length > 4);

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
                name="email"
                value={values.email}
                className="inputBox"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleInput}
                onKeyUp={focusPw}
                autoFocus
              />
              <input
                name="password"
                value={values.password}
                className="inputBox"
                type="password"
                placeholder="비밀번호"
                ref={pwInput}
                onChange={handleInput}
              />
              <button
                name="data"
                type="button"
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
