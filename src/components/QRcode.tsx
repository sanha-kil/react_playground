import { QRCodeSVG } from 'qrcode.react';
import React from 'react';
import styled from 'styled-components';

function QRcode() {
  return (
    <QRContainer>
      <QRCodeSVG value="https://reket.co.kr/p/FMKTLPJAGYKH" />
    </QRContainer>
  );
}

export default QRcode;

const QRContainer = styled.div``;
