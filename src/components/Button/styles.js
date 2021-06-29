import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ColorButton = styled.a`
  background: linear-gradient(90deg, #15FFAB 0%, #15F1FF 100%);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 298px;
  height: 66px;
  border-radius: 50px;
  color: #131218;
  > img{
    margin-left: 24px;
  }
`;