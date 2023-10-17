import React from 'react';
import backArrow from './Back_arrow.png';
import doneJoin from './banner_square.png';
import './Complete.scss';

const Complete = () => {
  return (
    <div className="complete">
      <div className="header">
        <button className="back-btn">
          <img src={backArrow} alt="뒤로가기 버튼" />
          <div>뒤로</div>
        </button>
        <div />
      </div>

      <div className="container">
        <img src={doneJoin} alt="완료 로고" />
        <div className="msg">
          <div className="doneMsg">회원 가입되었습니다!</div>
          <div className="askLogin">이제 로그인해주세요.</div>
        </div>
      </div>

      <div className="action">
        <button className="checkBtn">확인</button>
      </div>
    </div>
  );
};

export default Complete;
