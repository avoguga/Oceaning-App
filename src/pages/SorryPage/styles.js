import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 193px;
 > h2 {
    font-size: 38px;
    background: -webkit-linear-gradient(90deg, #FFDA15 -2.94%, #FFA215 105.98%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  > h1 {
    color: #FFF;
    font-size: 60px;
  }

  > p {
    font-size: 20px;
    color: #78748C;
    width: 650px;
    text-align: center;
    margin-bottom: 178px;
  }

  > button {
    width: 291px;
    height: 70px;
    border-radius: 50px;
    background-color: #201F26;
    color: #FFF;
    font-size: 24px;
  }
`;