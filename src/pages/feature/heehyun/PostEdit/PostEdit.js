import React from 'react';
import './PostEdit.scss';

const PostEdit = () => {
  return (
    <div className="postEdit">
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
              placeholder="내용 수정하기"
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

export default PostEdit;
