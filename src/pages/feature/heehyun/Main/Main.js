import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="postList">
          <div className="post">
            <div className="postHeader">
              <div className="profile">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  alt="프로필 사진"
                />
                <div>Name</div>
              </div>
              <div className="date">00.00.00</div>
            </div>
            <div className="postBody">
              일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는
              사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고
              믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인
              ELIZA의 이름을 따서 명명되었다.
            </div>
            <div className="postFooter">댓글 00</div>
          </div>
        </div>
        <div className="action">
          <button className="writingBtn">글 쓰기</button>
        </div>
      </div>
    </div>
  );
};

export default Main;
