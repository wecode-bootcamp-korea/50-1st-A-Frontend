import React from 'react';
import { useEffect, useState } from 'react';
import './Main.scss';
import { useNavigate } from 'react-router-dom';
import Like from './heart.png';
import Reply from './reply.png';
// import LikeFull from './heartFull.png';

const Main = () => {
  const [data, setData] = useState([]);
  const token = localStorage.getItem('TOKEN');
  useEffect(() => {
    fetch('http://10.58.52.215:8000/showPosts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorizaion: token,
      },
    })
      .then((res) => res.json())
      .then((e) => setData(e.message));
  }, [token]);

  // const deletePost = () => {
  //   fetch(`http://10.58.52.224:8000/posts/selectThread/${data.content_id}`, {
  //     method: 'DELETE',
  //   })
  //     .then((res) => res.json())
  //     .then((e) => setData(e.message));
  // };

  const navigate = useNavigate();

  const goToWrite = () => {
    navigate('/postAdd');
  };

  return (
    <div className="main">
      <div className="container">
        <div className="postList">
          {data.map((user, i) => (
            <div className="post" key={i}>
              <div className="postHeader">
                <div className="profile">
                  <img src={user.profile_image} alt="프로필 사진" />
                  <div>{user.name}</div>
                </div>
                <div className="date">{user.created_at}</div>
              </div>
              <div className="postBody">{user.content}</div>
              <div className="postFooter">
                <div className="info">
                  <div>좋아요 00</div>
                  <div>댓글 00</div>
                </div>
                <div className="postMu">
                  <img src={Like} alt="좋아요" />
                  <img src={Reply} alt="댓글" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="action">
          <button className="writingBtn" onClick={goToWrite}>
            글 쓰기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
