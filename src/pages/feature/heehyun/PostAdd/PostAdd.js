import React from 'react';
import './PostAdd.scss';

const PostAdd = () => {
  return (
    <div className="postAdd">
      <div className="container">
        <div className="publish">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="프로필사진"
          />

          <div className="content">
            Name
            <input
              className="contentBody"
              type="text"
              placeholder="스레드를 시작하세요."
            />
          </div>
        </div>
        <div className="action">
          <button className="cancelBtn">취소</button>
          <button className="postBtn">게시</button>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
