import React from 'react';
import './Join.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backArrow from './Back_arrow.png';

const Join = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [nickname, setNickname] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const setChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const setChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const setChangePasswordVerify = (event) => {
    setPasswordVerify(event.target.value);
  };

  const setChangeNickname = (event) => {
    setNickname(event.target.value);
  };

  const setChangeMobileNumber = (event) => {
    setMobileNumber(event.target.value);
  };

  const setChangeProfileImage = (event) => {
    setProfileImage(event.target.value);
  };

  const [user, setUser] = useState([]);

  const goToLogin = () => {
    navigate('/');
  };

  const signUp = () => {
    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      alert('이메일 형식이 아닙니다.');
    } else if (password !== passwordVerify) {
      alert('비밀번호가 다릅니다.');
    } else {
      const newUser = {
        id: user.length + 1,
        email: email,
        password: password,
        nickname: nickname,
        mobileNumber: mobileNumber,
      };

      setUser([...user, newUser]);
      alert('회원가입이 완료되었습니다!');
      navigate('/Complete');
    }
  };

  const [form, setForm] = useState({
    year: '연도',
    month: '월',
    day: '일',
  });

  const now = new Date();

  let years = [];
  for (let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y.toString() + '년');
  }

  let months = [];
  for (let m = 1; m <= 12; m += 1) {
    months.push(m.toString() + '월');
  }

  let days = [];
  for (let d = 1; d <= 31; d += 1) {
    days.push(d.toString() + '일');
  }

  return (
    <div className="signUp">
      <div className="header">
        <button onClick={goToLogin} className="back-btn">
          <img src={backArrow} alt="뒤로가기 버튼" />
          <div>뒤로</div>
        </button>
        <div />
      </div>

      <div className="container">
        <div className="pageTitle">회원가입</div>

        <div className="basicInfo">
          <div className="label">
            <div className="labelTitle">기본 정보</div>
            <div className="remark">필수 사항</div>
          </div>
          <input
            onChange={setChangeEmail}
            value={email}
            className="input email"
            type="text"
            placeholder="이메일"
          />

          <input
            className="input password"
            type="password"
            placeholder="비밀번호"
            onChange={setChangePassword}
            value={password}
          />

          <input
            className="input password-verify"
            type="password"
            placeholder="비밀번호 확인"
            onChange={setChangePasswordVerify}
            value={passwordVerify}
          />
        </div>

        <div className="nick">
          <div className="label">
            <div className="labelTitle">닉네임과 프로필 이미지</div>
            <div className="option">선택 사항</div>
          </div>
          <input
            className="input nickname"
            type="text"
            placeholder="닉네임"
            onChange={setChangeNickname}
            value={nickname}
          />

          <div className="fileUpload">
            <label for="imageId" className="imageInputBtn">
              파일 선택
            </label>
            <input
              type="text"
              className="filePath"
              placeholder="파일을 선택해주세요."
              value={profileImage}
            />
            <input
              type="file"
              id="imageId"
              className="profileImage"
              onChange={setChangeProfileImage}
            />
          </div>
        </div>

        <div className="phone">
          <div className="label">
            <div className="labelTitle">전화번호</div>
            <div className="option">선택 사항</div>
          </div>

          <div className="phoneNumber">
            <select className="pre-number">
              <option>010</option>
              <option>011</option>
              <option>016</option>
              <option>017</option>
              <option>019</option>
            </select>
            <input
              className="input mobile"
              type="text"
              placeholder="휴대폰 번호를 입력해주세요."
              onChange={setChangeMobileNumber}
              value={mobileNumber}
            />
          </div>
        </div>

        <div className="birthday">
          <div className="label">
            <div className="labelTitle">생일</div>
            <div className="option">선택 사항</div>
          </div>

          <div className="birth">
            <select
              className="year"
              value={form.year}
              onChange={(e) => setForm({ ...form, year: e.target.value })}
            >
              {years.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              className="month"
              value={form.month}
              onChange={(e) => setForm({ ...form, month: e.target.value })}
            >
              {months.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              className="day"
              value={form.day}
              onChange={(e) => setForm({ ...form, day: e.target.value })}
            >
              {days.map((item) => (
                <option value={item} key={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="action">
        <button onClick={signUp} className="joinbtn">
          회원 가입
        </button>
      </div>
    </div>
  );
};

export default Join;
