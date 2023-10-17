import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../scss/style.scss';

const Complete = () => {
  const navigate = useNavigate();
  const backBtn = () => {
    navigate('/jiyoung-login');
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
      <div className="content result">
        <div className="contentBody">
          <div className="resultArea complete">
            <strong className="message">회원 가입되었습니다!</strong>
            <span className="subMessage">이제 로그인해주세요.</span>
          </div>
        </div>
        <div className="contentFooter">
          <div className="btnArea btnFull">
            <Button btnPrimary btnValue="확인" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
