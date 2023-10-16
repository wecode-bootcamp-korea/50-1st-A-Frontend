import React from 'react';
import './Form.scss';

const Form = () => {
  return (
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
          <input type="text" className="formControl" placeholder="이메일" />
        </div>
        <div className="formInput">
          <label htmlFor="" className="formLabel blind">
            비밀번호
          </label>
          <input
            type="password"
            className="formControl"
            placeholder="비밀번호"
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
          <input type="text" className="formControl" placeholder="닉네임" />
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
            <select name="phoneNumber" id="phoneNumber" className="formControl">
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
            <select name="joinYear" id="joinYear" className="formControl">
              <option value="1998년">1998년</option>
            </select>
          </div>
          <div className="formSelect">
            <label htmlFor="joinMonth" className="formLabel blind">
              월
            </label>
            <select name="joinMonth" id="joinMonth" className="formControl">
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
  );
};

export default Form;
