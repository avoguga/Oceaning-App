import React from 'react';
import { Container, InputArea} from './styles'
import Button from '../../components/Button';
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
      <InputArea>
        <Input/>
        <Button>Continuar</Button>
      </InputArea>
    </Container>
  );
}

export default Register;