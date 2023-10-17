import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../scss/style.scss';

const Login = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const emailPattern =
    /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  const joinBtn = () => {
    navigate('/jiyoung-join');
  };

  const saveUserId = (event) => {
    setUserId(event.target.value);
  };

  const saveUserPw = (event) => {
    setUserPw(event.target.value);
  };

  const emailCheck = () => {
    if (emailPattern.test(userId)) {
      return true;
    } else {
      return false;
    }
  };

  const isUserInputValid = emailCheck() && userPw.length >= 5;

  return (
    <div className="page">
      <div className="content login">
        <div className="contentBody">
          <div className="loginLogo">
            <span className="blind">wecode</span>
          </div>
        </div>
        <div className="contentFooter">
          <div className="loginForm">
            <form>
              <div className="formInput">
                <label htmlFor="inputEmail" className="formLabel">
                  <span className="blind">이메일</span>
                </label>
                <input
                  id="inputEmail"
                  type="email"
                  className="formControl"
                  placeholder="이메일"
                  onChange={saveUserId}
                  value={userId}
                />
              </div>
              <div className="formInput">
                <label htmlFor="inputPassword" className="formLabel">
                  <span className="blind">비밀번호</span>
                </label>
                <input
                  id="inputPassword"
                  type="password"
                  className="formControl"
                  placeholder="비밀번호"
                  onChange={saveUserPw}
                  value={userPw}
                />
              </div>
            </form>
          </div>
          <div className="btnArea btnFull">
            <Button btnPrimary btnValue="로그인" disabled={!isUserInputValid} />
          </div>
          <div className="btnArea">
            <Button btnText btnValue="회원가입" onClick={joinBtn} />
            <Button btnText btnValue="비밀번호 찾기" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
