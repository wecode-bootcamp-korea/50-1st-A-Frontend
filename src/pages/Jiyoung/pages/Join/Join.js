import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../scss/style.scss';

const Join = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const emailPattern =
    /^([0-9a-zA-Z_.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;

  const backBtn = () => {
    navigate('/jiyoung-login');
  };

  const emailCheck = () => {
    if (emailPattern.test(userId)) {
      return true;
    } else {
      return false;
    }
  };

  const isUserInputValid = emailCheck() && userPw.length >= 5;

  const completeBtn = () => {
    fetch('http://10.58.52.85:8000/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'JOIN_SUCCSESS') {
          navigate('/jiyoung-complete');
        } else {
          alert('회원가입 실패!');
        }
      });
  };

  return (
    <div className="page">
      <header className="header">
        <div className="headerLeft">
          <button type="button" className="btn btnBack" onClick={backBtn}>
            <i className="icon icon-back-40" />
            <span>뒤로</span>
          </button>
        </div>
      </header>
      <div className="content join">
        <div className="contentBody">
          <div className="joinArea">
            <h2 className="joinHeader">회원가입</h2>
            <form>
              <fieldset>
                <legend className="blind">기본 정보</legend>
                <div className="formTitle required">
                  <span className="title">기본 정보</span>
                  <span className="subTitle">필수 사항</span>
                </div>
                <div className="formInput">
                  <label htmlFor="" className="formLabel blind">
                    이메일
                  </label>
                  <input
                    type="text"
                    className="formControl"
                    placeholder="이메일"
                    onChange={(event) => setUserId(event.target.value)}
                    value={userId}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="" className="formLabel blind">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    className="formControl"
                    placeholder="비밀번호"
                    onChange={(event) => setUserPw(event.target.value)}
                    value={userPw}
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="" className="formLabel blind">
                    비밀번호 확인
                  </label>
                  <input
                    type="password"
                    className="formControl"
                    placeholder="비밀번호 확인"
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend className="blind">닉네임과 프로필 이미지</legend>
                <div className="formTitle">
                  <span className="title">닉네임과 프로필 이미지</span>
                  <span className="subTitle">선택 사항</span>
                </div>
                <div className="formInput">
                  <label htmlFor="" className="formLabel blind">
                    닉네임
                  </label>
                  <input
                    type="text"
                    className="formControl"
                    placeholder="닉네임"
                  />
                </div>
              </fieldset>
              <fieldset>
                <legend className="blind">전화번호</legend>
                <div className="formTitle">
                  <span className="title">전화번호</span>
                  <span className="subTitle">선택 사항</span>
                </div>
                <div className="formBlock number">
                  <div className="formSelect">
                    <label htmlFor="phoneNumber" className="formLabel blind">
                      휴대폰 번호 앞자리
                    </label>
                    <select
                      name="phoneNumber"
                      id="phoneNumber"
                      className="formControl"
                    >
                      <option value="010">010</option>
                    </select>
                  </div>
                  <div className="formInput">
                    <label htmlFor="" className="formLabel blind">
                      휴대폰 번호 뒷자리
                    </label>
                    <input
                      type="text"
                      className="formControl"
                      placeholder="휴대폰 번호를 입력해주세요."
                    />
                  </div>
                </div>
              </fieldset>
              <fieldset>
                <div className="formTitle">
                  <span className="title">생일</span>
                  <span className="subTitle">선택 사항</span>
                </div>
                <div className="formBlock birthday">
                  <div className="formSelect">
                    <label htmlFor="joinYear" className="formLabel blind">
                      년도
                    </label>
                    <select
                      name="joinYear"
                      id="joinYear"
                      className="formControl"
                    >
                      <option value="1998년">1998년</option>
                    </select>
                  </div>
                  <div className="formSelect">
                    <label htmlFor="joinMonth" className="formLabel blind">
                      월
                    </label>
                    <select
                      name="joinMonth"
                      id="joinMonth"
                      className="formControl"
                    >
                      <option value="1월">1월</option>
                    </select>
                  </div>
                  <div className="formSelect">
                    <label htmlFor="joinDay" className="formLabel blind">
                      일
                    </label>
                    <select name="joinDay" id="joinDay" className="formControl">
                      <option value="1일">1일</option>
                    </select>
                  </div>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="contentFooter">
          <div className="btnArea btnFull">
            <Button
              btnPrimary
              btnLabel="회원 가입"
              disabled={!isUserInputValid}
              onClick={completeBtn}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
