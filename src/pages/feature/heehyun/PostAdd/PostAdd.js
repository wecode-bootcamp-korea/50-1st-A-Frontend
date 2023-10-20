import React, { useState } from 'react';
import './PostAdd.scss';
import { useNavigate } from 'react-router-dom';

const PostAdd = () => {
  const token = localStorage.getItem('TOKEN');

  const navigate = useNavigate();

  const [contents, setContents] = useState('');

  const setChangeContents = (event) => {
    setContents(event.target.value);
  };

  const goToBack = () => {
    navigate('/main');
  };

  const letPost = () => {
    fetch('http://10.58.52.215:8000/writePost', {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        content: contents,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Create Post SUCCESS!!!') {
          alert('게시글이 등록되었습니다.');
          navigate('/main');
        }
      });
  };

  return (
    <div className="postAdd">
      <div className="container">
        <div className="publish">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            alt="프로필사진"
          />

          <div className="content">
            <div>Name</div>
            <input
              className="contentBody"
              type="text"
              placeholder="스레드를 시작하세요."
              onChange={setChangeContents}
              value={contents}
            />
          </div>
        </div>
        <div className="action">
          <button className="cancelBtn" onClick={goToBack}>
            취소
          </button>
          <button className="postBtn" onClick={letPost}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostAdd;
