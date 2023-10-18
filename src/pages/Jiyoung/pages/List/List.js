import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../scss/style.scss';
import profile from '../../../../assets/sample.png';

const List = () => {
  return (
    <div className="page">
      <div className="content list">
        <div className="contentBody">
          <ul className="listArea">
            {THREAD_LIST.map((list) => (
              <li className="listItem" key={list.id}>
                <div className="threadArea">
                  <div className="threadTop">
                    <div className="threadProfile">
                      <img src={list.profile} alt="프로필 사진" />
                      <span className="threadName">{list.name}</span>
                    </div>
                    <div className="threadDate">
                      <span>{list.date}</span>
                    </div>
                  </div>
                  <div className="threadBody">
                    <Link to="#" onClick={(e) => e.preventDefault()}>
                      <p className="threadText">{list.text}</p>
                    </Link>
                  </div>
                  <div className="threadFooter">
                    <span className="threadComment">
                      댓글 <span>{list.comment}</span>
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="contentFooter">
          <div className="btnArea btnRight">
            <Button btnPrimary btnLabel="글 쓰기" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;

const THREAD_LIST = [
  {
    id: 1,
    profile: profile,
    name: 'hongjiyoung1',
    date: '00.00.00',
    text: '일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인 ELIZA의 이름을 따서 명명되었다.',
    comment: 1,
  },
  {
    id: 2,
    profile: profile,
    name: 'hongjiyoung2',
    date: '00.00.00',
    text: '일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인 ELIZA의 이름을 따서 명명되었다.',
    comment: 2,
  },
  {
    id: 3,
    profile: profile,
    name: 'hongjiyoung3',
    date: '00.00.00',
    text: '일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인 ELIZA의 이름을 따서 명명되었다.',
    comment: 3,
  },
  {
    id: 4,
    profile: profile,
    name: 'hongjiyoung4',
    date: '00.00.00',
    text: '일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인 ELIZA의 이름을 따서 명명되었다.',
    comment: 4,
  },
  {
    id: 5,
    profile: profile,
    name: 'hongjiyoung5',
    date: '00.00.00',
    text: '일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못 돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더 지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉 웨이젠바움이 만든 챗봇인 ELIZA의 이름을 따서 명명되었다.',
    comment: 5,
  },
];
