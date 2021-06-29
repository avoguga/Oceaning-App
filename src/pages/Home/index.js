import React, { useState, useEffect } from 'react';
import {Container} from './styles'
import StartButton from '../../components/StartButton'

const Home = () =>{
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('http://localhost:3333/name'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson);
      });
  }
  useEffect(()=>{
    getData()
  },[])

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