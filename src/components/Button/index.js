import React, {setState} from 'react';
import { Container, ColorButton} from './styles';
import ArrowRight from '../../assets/icon-1.svg'

const Button = ({children}) => {
  return(
    <Container>
      <ColorButton>
        <h2>{children}</h2>
        <img alt="Arrow Right" src={ArrowRight}/>
      </ColorButton>
    </Container>
  );
}

export default Button;