import React from 'react';
import {Container} from './styles'
import ArrowRight from '../../assets/icon-2.svg';

const SuccessRegister = () =>{
  return(
    <Container>
      <h2>
        Parabéns!
      </h2>
      <h1>
        Suas habilidades foram enviadas
      </h1>
      <p>
        Faça parte dessa jornada junto com a Oceaning e conquiste o mundo com suas habilidades de programação.
      </p>
      <a href="/sorry">
        <button>VER TODOS <img alt="Arrow Right" src={ArrowRight}/> </button>
      </a>
    </Container>
  );
}

export default SuccessRegister;