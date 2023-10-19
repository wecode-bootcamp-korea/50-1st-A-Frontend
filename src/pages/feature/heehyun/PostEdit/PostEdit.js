import React, { useState } from 'react';
import './PostEdit.scss';
import { useNavigate } from 'react-router-dom';

const PostEdit = () => {
  const token = localStorage.getItem('TOKEN');
  const navigate = useNavigate();
  const [content, setContent] = useState('');

  const setChangeContent = (event) => {
    setContent(event.target.value);
  };

  const goToBack = () => {
    navigate('/main');
  };

  const letEdit = () => {
    fetch('http://10.58.52.224:8000/posts/insertThread', {
      method: 'PUT',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        content: content,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === '') {
          alert('게시글이 수정되었습니다.');
          navigate('/main');
        }
      });
  };

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
              onChange={setChangeContent}
            />
          </div>
        </div>
        <div className="action">
          <button className="cancelBtn" onClick={goToBack}>
            취소
          </button>
          <button className="postBtn" onClick={letEdit}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostEdit;
