import React from 'react';
import './LoginYoo.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Nav from '../../../components/Nav/Nav';
function LoginYoo() {
  // function handleSubmit(e) {
  //   const
  // }

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main');
  };

  return (
    <div className="login-js">
      <Nav />
      <main className="wrapClass">
        <span className="lobsterFont">Westagram</span>
        <div className="inputWrap">
          <input
            onChange={handleldInput}
            type="text"
            className="id input"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value=""
          />
          <input
            type="password"
            className="pw input"
            placeholder="비밀번호"
            value=""
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
