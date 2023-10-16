import React from "react";
import "./Main.scss";

const Main = () => {
  return <div className="main">
    <div className="post">
      <div className="posting-box">
        <div className="header">
          <div className="profile">
            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="프로필 사진" className="profile-image"></img>
            <div className="nickname">Name</div>
          </div>
          <div className="posting-date">00.00.00</div>
        </div>
        <div className="detail">
          내용
        </div>
        <button className="comment-link">댓글 00</button>
      </div>
    </div>

    <div className="footer">
      <button className="btn write">글 쓰기</button></div>
  </div>;
};

export default Main;