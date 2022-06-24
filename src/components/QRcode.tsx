import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import styled from 'styled-components';

function QRcode() {
  return (
    <QRContainer>
      <QRCodeSVG value="https://shop.reket.co.kr/" />
    </QRContainer>
  );
}

export default QRcode;

const QRContainer = styled.div``;
