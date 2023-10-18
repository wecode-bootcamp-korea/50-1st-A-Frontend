import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import '../../scss/style.scss';
import profile from '../../images/sample/picture.png';

const List = () => {
  return (
    <div className="page">
      <div className="content list">
        <div className="contentBody">
          <ul class="listArea">
            <li className="listItem">
              <Link
                to="#"
                onClick={(e) => e.preventDefault()}
                className="threadArea"
              >
                <div className="threadTop">
                  <div className="threadProfile">
                    <img src={profile} alt="프로필 사진" />
                    <span className="threadName">Name</span>
                  </div>
                  <div>
                    <span>00.00.00</span>
                  </div>
                </div>
                <div className="threadBody">
                  <p>
                    일라이자 효과는 인간의 사고 과정과 감정을 AI 시스템에 잘못
                    돌리는 사람들의 경향을 말하며, 따라서 시스템이 실제보다 더
                    지능적이라고 믿는다. 이 현상은 1966년 MIT 교수 조셉
                    웨이젠바움이 만든 챗봇인 ELIZA의 이름을 따서 명명되었다.
                  </p>
                </div>
                <div className="threadFooter">
                  <span>
                    댓글 <span>00</span>
                  </span>
                </div>
              </Link>
            </li>
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
