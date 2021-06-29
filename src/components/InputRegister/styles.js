import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 683px;
  border-bottom: 5px solid #363443;
`;

export const InputForm = styled.input`
  width: 100%;
  height: 60px;
  font-size: 40px;
  font-weight: 600;
  background-color: transparent;
  color: ${props => props.inputColor};
  ::placeholder{
    color: ${props => props.inputFont};
  }
`;