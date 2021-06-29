import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
`;

export const InputArea = styled.div`
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