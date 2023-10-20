import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import '../../scss/style.scss';
import profile from '../../../../assets/sample.png';

const Add = () => {
  const [addText, setAddText] = useState('');
  const token = localStorage.getItem('token');

  const addClick = () => {
    fetch('http://10.58.52.224:8000/posts/insertThread', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        content: addText,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'thread 등록성공!') {
          alert('등록 성공!');
        } else {
          alert('등록 실패!');
        }
      });
  };
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
                onChange={(event) => setAddText(event.target.value)}
                value={addText}
              />
            </div>
          </div>
        </div>
        <div className="contentFooter">
          <div className="btnArea btnBetween">
            <Button btnLine btnLabel="취소" />
            <Button btnPrimary btnLabel="게시" onClick={addClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
