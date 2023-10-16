import React from 'react';
import './Button.scss';
import Button from './Button';

const LibButton = () => {
  return (
    <>
      <div className="btnArea btnFull">
        <Button btnPrimary btnValue="Primary" />
      </div>
      <div className="btnArea btnLeft">
        <Button btnLine btnValue="Line" />
      </div>
      <div className="btnArea btnRight">
        <Button btnLine btnValue="Line" />
      </div>
      <div className="btnArea btnBetween">
        <Button btnPrimary btnValue="Primary" />
        <Button btnPrimary btnValue="Primary" />
      </div>
      <div className="btnArea">
        <Button btnText btnValue="Text1" />
        <Button btnText btnValue="Text2" />
      </div>
    </>
  );
};

export default LibButton;
