import React from 'react';
import './Button.scss';

const Button = (props) => {
  const {
    btnLabel,
    btnPrimary,
    btnSecondary,
    btnLine,
    btnText,
    btnSm,
    btnMd,
    disabled,
    onClick,
  } = props;
  const _btnPrimary = btnPrimary ? 'btnPrimary' : '';
  const _btnSecondary = btnSecondary ? 'btnSecondary' : '';
  const _btnLine = btnLine ? 'btnLine' : '';
  const _btnText = btnText ? 'btnText' : '';
  const _btnSm = btnSm ? 'btnSm' : '';
  const _btnMd = btnMd ? 'btnMd' : '';
  return (
    <button
      type="button"
      className={`btn ${_btnPrimary}${_btnSecondary}${_btnLine}${_btnText} ${_btnSm}${_btnMd}`}
      disabled={disabled}
      onClick={onClick}
    >
      <span>{btnLabel}</span>
    </button>
  );
};

export default Button;
