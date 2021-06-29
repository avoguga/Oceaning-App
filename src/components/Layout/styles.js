import styled from 'styled-components';
import bg from '../../assets/background.jpg'

/**
*Layout 
*MH = MainHeader
*CT = Content
*MF = MainFooter
*/

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 120px auto;
  
  grid-template-areas:
  'MH'
  'CT'
  'MF';

  height: 100vh;
  background: url(${bg});
`;
