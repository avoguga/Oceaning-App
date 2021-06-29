import React from 'react';
import {Container} from './styles'
import StartButton from '../../components/StartButton'
const Home = () =>{
  return(
    <Container>
      <h2>
        Time de desenvolvimento
      </h2>
      <h1>
        Sua evolução começa agora
      </h1>
      <p>
      Faça parte dessa jornada junto com a Oceaning e conquiste o mundo com suas habilidades de programação.
      </p>
      <StartButton/>
    </Container>
  );
}

export default Home;