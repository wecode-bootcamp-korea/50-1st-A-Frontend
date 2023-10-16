import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { btnValue, btnPrimary, btnLine, btnText, disabled } = props;
  return (
    <>
      {/* 
      버튼 공통
      - btn-primary
      - btn-line
      - btn-text
      - btn-block
      - btn-inline
      - btn width : 96, 120
      - btn height : 40, 48, 50, 56
    */}
      <button
        type="button"
        className={`btn ${btnPrimary ? 'btnPrimary' : ''}${
          btnLine ? 'btnLine' : ''
        }${btnText ? 'btnText' : ''}`}
        disabled={disabled}
      >
        <span>{btnValue}</span>
      </button>
    </>
  );
};

export default Button;
