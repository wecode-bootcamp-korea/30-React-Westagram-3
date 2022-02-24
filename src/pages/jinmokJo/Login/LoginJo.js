import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoginInput from './Components/LoginInput';

import './LoginJo.scss';

function LoginJo() {
  const [inputValue, setInputValue] = useState({ userId: '', password: '' });

  const navigate = useNavigate();

  const loginValid =
    inputValue.userId.includes('@') && inputValue.password.length >= 5;

  const handleLoginInput = e => {
    if (e.target.type === 'text') {
      setInputValue(prevState => ({
        userId: e.target.value,
        password: inputValue.password,
      }));
    } else if (e.target.type === 'password') {
      setInputValue(prevState => ({
        userId: inputValue.userId,
        password: e.target.value,
      }));
    }
  };

  // useEffect(
  //   () =>
  //     fetch('http://192.168.121.151:8000/users/signup', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         first_name: 'test',
  //         last_name: 'test',
  //         username: 'test',
  //         email: 'test456@test.com',
  //         password: '123456!ab',
  //         contact: '010-1244-1242',
  //       }),
  //     })
  //       .then(response => response.json())
  //       .then(result => console.log('결과: ', result)),
  //   []
  // );

  const goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.6.42:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: inputValue.userId,
        password: inputValue.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          navigate('/main-jo');
        } else {
          alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
        }
      });
    // if (loginValid) {
    //   navigate('/main-jo');
    // } else {
    //   alert('가입된 회원이 아닙니다. 회원가입을 먼저 해주세요.');
    //   navigate('/signup-jo');
    // }
  };

  return (
    <main className="Login">
      <div className="loginMain">
        <h1 className="instagramFont title">Westagram</h1>
        <form action="" method="post" id="loginForm" onSubmit={goToMain}>
          <LoginInput
            placeholder="이메일"
            type="text"
            inputValue={inputValue}
            handleIdInput={handleLoginInput}
          />
          <LoginInput
            placeholder="비밀번호"
            type="password"
            name="password"
            inputValue={inputValue}
            handleIdInput={handleLoginInput}
          />
          <button
            type="submit"
            form="loginForm"
            className={`loginBtn ${loginValid ? 'activeLoginBtn' : ''}`}
            disabled={loginValid ? false : true}
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
