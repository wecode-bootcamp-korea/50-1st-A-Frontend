import React from 'react';
import Button from '../../components/Button/Button';
import '../../scss/style.scss';
import profile from '../../../../assets/sample.png';

const Add = () => {
  return (
    <div className="page">
      <div className="content add">
        <div className="contentBody">
          <div className="addArea">
            <div className="addLeft">
              <img src={profile} alt="프로필 사진" />
            </div>
            <div className="addRight">
              <span className="adddName">fasdfa</span>
              <textarea
                className="addText"
                placeholder="스레드를 시작하세요."
              />
            </div>
          </div>
        </div>
        <div className="contentFooter">
          <div className="btnArea btnBetween">
            <Button btnLine btnLabel="취소" />
            <Button btnPrimary btnLabel="게시" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
