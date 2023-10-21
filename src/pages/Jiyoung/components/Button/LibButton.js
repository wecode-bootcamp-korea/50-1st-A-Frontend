import React from 'react';
import './Button.scss';
import Button from './Button';

const LibButton = () => {
  return (
    <>
      <div className="btnArea btnFull">
        <Button btnPrimary btnLabel="Primary" />
      </div>
      <div className="btnArea btnLeft">
        <Button btnLine btnLabel="Line" />
      </div>
      <div className="btnArea btnRight">
        <Button btnLine btnLabel="Line" />
      </div>
      <div className="btnArea btnBetween">
        <Button btnPrimary btnLabel="Primary" />
        <Button btnPrimary btnLabel="Primary" />
      </div>
      <div className="btnArea">
        <Button btnText btnLabel="Text1" />
        <Button btnText btnLabel="Text2" />
      </div>
    </>
  );
};

export default LibButton;
