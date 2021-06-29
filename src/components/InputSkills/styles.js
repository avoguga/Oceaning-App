import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;

  > h2{
    color: aliceblue;
  }
`;

export const ContentArea = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputArea = styled.form`
  width: 683px;
  border-bottom: 5px solid ${props => props.inputColor || "#15F7D9"};
`;

export const InputForm = styled.input`
  width: 100%;
  height: 60px;
  font-size: 40px;
  font-weight: 600;
  background-color: transparent;
  color: ${props => props.inputColor || "#15F7D9"};
  ::placeholder{
    color: ${props => props.inputFont || "#15F7D9"};
  }
`;

export const Button = styled.button`
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

export const Skills = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 863px;
  height: 80px;
  background-color: #201F26;
  border-radius: 20px;

  font-size: 22px;
  color: #777584;
  margin-top: 10px;
`;

export const DataChip = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  margin-top: 10px;
  width: 1000px;
  > div{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: 1px solid #FFF;
    border-radius: 50px;
    color: #FFF;
    
    padding: 5px 10px;
    margin: 10px;

    > img{
      margin-left: 20px;
    }
  }
`;