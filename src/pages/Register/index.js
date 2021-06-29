import React from 'react';
import { Container } from './styles'
import Input from '../../components/InputRegister';

const Register = () =>{
  return(
    <Container>
      <h2>
        Vamos começar
      </h2>
      <h1>
        Como devemos te chamar?
      </h1>
      <p>
        Nos diga como devemos te chamar e qual é o seu e-mail para que possamos te enviar novidades
      </p>
      <Input/>
    </Container>
  );
}

export default Register;