import React, {useEffect, useState} from 'react';
import {Container} from './styles'

const Skills = () =>{

const [data, setData]=useState([]);

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
};

useEffect(()=>{
  getData()
},[]);

  return(
    <Container>
      <h2>
      {
       data.map((name)=><h2>Olá, {name.name}</h2>)
      }
      </h2>
      <h1>
        Quais são suas habilidades?
      </h1>
      <p>
        Nos diga como devemos te chamar e qual é o seu e-mail para que possamos te enviar novidades
      </p>
      <Input/>
    </Container>
  );
}

export default Skills;