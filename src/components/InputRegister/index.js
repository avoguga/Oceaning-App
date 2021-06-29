import React, {useState, useRef, useEffect} from 'react';
import { Container, InputForm} from './styles';


const Input = () => {
  const inputRef = useRef("");

  const [color, setColor] = useState("#6A6879");

  const [font, setFont] = useState("#6A6879");

  const [name, setName] = useState("");

  const setStyle = (color, font) => {
    setColor(color);
    setFont(font);
  };

  useEffect(() => {
    inputRef.current = color
  }, [color])

  return(
    <Container 
    ref={inputRef}
    inputColor={color}
    onChange={e => setStyle(e.target.color)}
    >
      <InputForm 
      ref={inputRef}
      inputColor={color} 
      inputFont={font} 
      placeholder="Digite seu nome"
      onChange={e => setStyle(e.target.color), e => setName(e.target.name)}  
      />
    </Container>
  );
}

export default Input;