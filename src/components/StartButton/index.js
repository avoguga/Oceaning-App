import React from 'react';
import { Container, Button} from './styles';
import ArrowRight from '../../assets/icon-1.svg'

const StartButton = () => {
  return(
    <Container>
      <Button href="/register">
        <h2>COMEÇAR AGORA</h2>
        <img alt="Arrow Right" src={ArrowRight}/>
      </Button>
    </Container>
  );
}

export default StartButton;