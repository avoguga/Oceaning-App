import styled from 'styled-components';

export const Container = styled.div`
  grid-area: MH;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 73px;
`;

export const Logo = styled.img`
  width: 313px;
  height: 35px;
  margin-left: 111px;
`;

export const Share = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 80px;
  text-align: end;

  p {
  color: #FFF;
  font-size: 15px;
  opacity: 0.7;
  margin-right: 31px;
  }

  h3 {
  color: #FFF;
  font-size: 20px;
  margin-right: 31px;
  }

  > img {
    width: 57px;
    height: 58px;
    cursor: pointer;
  }
`;
