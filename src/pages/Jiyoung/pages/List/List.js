import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../scss/style.scss';

const List = () => {
  const navigate = useNavigate();
  const [threadList, setThreadList] = useState([]);
  const [comment, setComment] = useState('');
  const [show, setShow] = useState(false);
  const [commentList, setCommentList] = useState([]);
  const token = localStorage.getItem('token');
  const addBtn = () => {
    navigate('/jiyoung-add');
  };
  useEffect(() => {
    fetch('http://10.58.52.224:8000/posts/selectThread', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setThreadList(data.message);
      });
  }, []);

  const btnThread = (id) => {
    setShow(id);

    fetch(`http://10.58.52.224:8000/comments/selectComment/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCommentList(data.message);
      });
  };

  const commeneClick = (id) => {
    fetch(`http://10.58.52.224:8000/comments/insertComment/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        content: comment,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === '댓글 등록 성공') {
          alert('등록 성공!');
        } else {
          alert('등록 실패!');
        }
      });
  };
  return (
    <div className="page">
      <div className="content list">
        <div className="contentBody">
          <ul className="listArea">
            {threadList &&
              threadList.map((list) => (
                <li className="listItem" key={list.id}>
                  <div className="threadArea">
                    <div className="threadTop">
                      <div className="threadProfile">
                        <img src={list.profile_image} alt="프로필 사진" />
                        <span className="threadName">{list.name}</span>
                      </div>
                      <div className="threadDate">
                        <span>{list.created_at}</span>
                      </div>
                    </div>
                    <div className="threadBody">
                      <button type="button" onClick={() => btnThread(list.id)}>
                        <p className="threadText">{list.content}</p>
                      </button>
                    </div>
                    <div className="threadFooter">
                      <span className="threadComment">
                        댓글 <span>00</span>
                      </span>
                    </div>
                  </div>
                  {list.id === show && (
                    <div className="commentArea">
                      <div className="commentWrite">
                        <div className="formInput">
                          <label htmlFor="" className="formLabel blind">
                            댓글 작성
                          </label>
                          <input
                            type="text"
                            className="formControl"
                            placeholder="댓글을 작성해주세요."
                            value={comment}
                            onChange={(event) => setComment(event.target.value)}
                          />
                        </div>
                        <Button
                          btnSecondary
                          btnMd
                          btnLabel="댓글 게시"
                          onClick={() => commeneClick(list.id)}
                        />
                      </div>
                      <ul className="commentList">
                        {commentList.map((comment) => (
                          <li className="commentItem" key={comment.id}>
                            <div className="commentLeft">
                              <div className="commentProfile">
                                <img
                                  src={comment.profile_image}
                                  alt="프로필 사진"
                                />
                              </div>
                              <div className="commentInfo">
                                <span className="commentName">
                                  {comment.name}
                                </span>
                                <span className="commentText">
                                  {comment.content}
                                </span>
                              </div>
                            </div>
                            <div className="commentRight">
                              <span className="commentDate">
                                {comment.created_at}
                              </span>
                              <div className="btnArea">
                                <button type="button" className="btn btnDelete">
                                  삭제
                                </button>
                                <button type="button" className="btn">
                                  수정
                                </button>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
          </ul>
        </div>
        <div className="contentFooter">
          <div className="btnArea btnRight">
            <Button btnPrimary btnLabel="글 쓰기" onClick={addBtn} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
