import React, { useState } from 'react';
import './Login.scss';
import logo1 from './Logo.png';
import logo2 from './logo_wecode.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  // 라우터를 통해 네비게이트 함수 활성화
  const navigate = useNavigate();

  // 이메일, 비밀번호 저장할 State 사용
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 이메일, 비밀번호를 객체로 저장할 State 사용
  // const [user, setUser] = useState([]);

  // 이메일, 비밀번호를 저장할 함수 사용
  const setChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const setChangePassword = (event) => {
    setPassword(event.target.value);
  };

  // 버튼을 활성화시킬 수 있는 active 변수 사용
  const [active, setActive] = useState(false);

  // 로그인 버튼을 눌렀을때 이메일과 비밀번호를 저장하면서 동시에 메인 페이지 이동
  const goToMain = () => {
    fetch('http://10.58.52.71:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        // id: user.length + 1,
        email: email,
        passoword: password,
        // nickname: nickname,
        // mobileNumber: mobileNumber,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === '로그인 성공!') {
          localStorage.setItem('TOKEN', data.token);
          navigate('/main'); // 로그인 성공시 메인화면 이동
        } else if (data.message === 'USER_NOT_FOUND') {
          alert(
            '가입되지 않은 이메일입니다.\n회원 가입 혹은 이메일을 확인해주세요.',
          ); // 없는 이메일로 로그인 시도 시 회원 가입 혹은 이메일 확인 권유 알림
        } else if (data.message === '로그인 정보 불일치!') {
          alert('비밀번호가 틀렸습니다.'); // 비밀번호가 틀렸음을 알림
        }
      });
  };

  // Enter키를 누르면 로그인화면 전환
  const handleOnClick = (event) => {
    if (event.key === 'Enter' && active === true) {
      goToMain();
    }
  };

  // 이메일에 '@'와 ','이 포함되어 있으며 비밀번호의 길이가 10글자 이상일 때 로그인 버튼 활성화
  const passedLogin = () => {
    return email.includes('@') && password.length >= 10 && email.includes('.')
      ? setActive(true)
      : setActive(false);
  };

  // 회원가입 페이지 이동 함수
  const goToJoin = () => {
    navigate('/join');
  };

  return (
    <div className="login">
      <div className="logo-board">
        <img src={logo1} alt="로고1" />
        <img src={logo2} alt="로고2" />
      </div>

      <div className="email-password">
        <input
          onKeyUp={passedLogin}
          className="input"
          type="text"
          placeholder="이메일"
          value={email}
          onChange={setChangeEmail}
          onKeyPress={handleOnClick}
        />

        <input
          onKeyUp={passedLogin}
          className="input"
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={setChangePassword}
          onKeyPress={handleOnClick}
        />

        {/* 로그인이 가능하면 초록색으로 전환 */}
        <button
          onClick={goToMain}
          className={!active ? 'loginbtn' : 'loginbtn-access'}
          disabled={!active}
        >
          로그인
        </button>
      </div>

      <div className="buttons">
        <button onClick={goToJoin} className="btn join">
          회원 가입
        </button>

        <div>|</div>

        <button className="btn find">비밀번호 찾기</button>
      </div>
    </div>
  );
};

export default Login;
