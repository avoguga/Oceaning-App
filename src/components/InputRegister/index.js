import React, {useState, useRef} from 'react';
import { Container, InputForm, Button, InputArea} from './styles';
import ArrowRight from '../../assets/icon-1.svg'

const Input = () => {

  const [color, setColor] = useState("#6A6879");

  const [font, setFont] = useState("#6A6879");

  const [name, setName] = useState("");

  const [nameError, setNameError] = useState("Preencha esse campo");


  const setStyle = (color, font) => {
    setColor(color);
    setFont(font);
  };

  const inputRef = useRef(null);

  const handlerClick = () => {
    if (inputRef.current.value === "") {

    }
  }

  return(
    <>
    <Container>
      <InputArea 
      inputColor={color}
      onChange={e => setStyle(e.target.color)}>
        <InputForm
        ref={inputRef}
        inputColor={color}
        inputFont={font} 
        placeholder="Digite seu nome"
        onChange={e => { setStyle(e.target.color); setName(e.target.value)}}
        type="text"
        value={name}
        />
      </InputArea>
      <Button onClick={handlerClick}>
        <h2>CONTINUAR</h2>
        <img alt="Arrow Right" src={ArrowRight}/>
      </Button>
    </Container>
    <p>{nameError}</p>
    </>
  );
}

export default Input;