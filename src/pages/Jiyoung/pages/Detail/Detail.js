import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../scss/style.scss';
import profile from '../../../../assets/sample.png';

const Detail = () => {
  const navigate = useNavigate();
  const backBtn = () => {
    navigate('/jiyoung-list');
  };
  return (
    <div className="page">
      <header className="header">
        <div className="headerLeft">
          <button type="button" className="btn btnBack" onClick={backBtn}>
            <i className="icon icon-back-40" />
            <span>뒤로</span>
          </button>
        </div>
      </header>
      <div className="content detail">
        <div className="contentBody">
          <div className="threadArea">
            <div className="threadTop">
              <div className="threadProfile">
                <img src={profile} alt="프로필 사진" />
                <span className="threadName">Name</span>
              </div>
              <div className="threadDate">
                <span>00.00.00</span>
              </div>
            </div>
            <div className="threadBody">
              <p className="threadText">
                일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못
                돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더
                지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이
                만든 챗봇인 ELIZA의 이름을 따서 명명되었다.
              </p>
            </div>
            <div className="threadFooter">
              <span className="threadComment">
                댓글 <span>00</span>
              </span>
            </div>
          </div>
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
                />
              </div>
              <Button btnSecondary btnMd btnLabel="댓글 게시" />
            </div>
            <ul className="commentList">
              {COMMENT_LIST.map((comment) => (
                <li className="commentItem" key={comment.id}>
                  <div className="commentLeft">
                    <div className="commentProfile">
                      <img src={comment.profile} alt="프로필 사진" />
                    </div>
                    <div className="commentInfo">
                      <span className="commentName">{comment.name}</span>
                      <span className="commentText">{comment.text}</span>
                    </div>
                  </div>
                  <div className="commentRight">
                    <span className="commentDate">{comment.date}</span>
                    <div className="btn-area">
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
        </div>
      </div>
    </div>
  );
};

export default Detail;

const COMMENT_LIST = [
  {
    id: 1,
    profile: profile,
    name: 'hongjiyoung1',
    text: '답글 내용',
    date: '00.00.00',
  },
  {
    id: 2,
    profile: profile,
    name: 'hongjiyoung2',
    text: '답글 내용',
    date: '00.00.00',
  },
  {
    id: 3,
    profile: profile,
    name: 'hongjiyoung3',
    text: '답글 내용',
    date: '00.00.00',
  },
  {
    id: 4,
    profile: profile,
    name: 'hongjiyoung4',
    text: '답글 내용',
    date: '00.00.00',
  },
  {
    id: 5,
    profile: profile,
    name: 'hongjiyoung5',
    text: '답글 내용',
    date: '00.00.00',
  },
];
