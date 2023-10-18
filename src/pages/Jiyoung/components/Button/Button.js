import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { btnLabel, btnPrimary, btnLine, btnText, disabled, onClick } = props;
  const _btnPrimary = btnPrimary ? 'btnPrimary' : '';
  const _btnLine = btnLine ? 'btnLine' : '';
  const _btnText = btnText ? 'btnText' : '';
  return (
    <button
      type="button"
      className={`btn ${_btnPrimary}${_btnLine}${_btnText}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{btnLabel}</span>
    </button>
  );
};

export default Button;
