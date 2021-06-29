import React, {useState} from 'react';
import { Container, InputForm} from './styles';


const Input = () => {
  const [color, setColor] = useState("#6A6879");

  const [font, setFont] = useState("#6A6879");

  const setStyle = (color, font) => {
    setColor(color);
    setFont(font);
  };

  return(
    <Container>
      <InputForm inputColor={color} inputFont={font} placeholder="Digite seu nome"/>
    </Container>
  );
}

export default Input;