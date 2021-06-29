import React, {useState, useRef, useEffect} from 'react';
import { Container, InputForm, Button, InputArea} from './styles';
import ArrowRight from '../../assets/icon-1.svg'
import { useHistory } from 'react-router';

const Input = () => {

  const history = useHistory();

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const names = { name }
    
    fetch('http://localhost:3333/name', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: JSON.stringify(names)
    }).then(() =>{
      console.log('Nome adicionado');
    })

    history.push("/skills")
  }

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
      <Button onClick={handleSubmit}>
        <h2>CONTINUAR</h2>
        <img alt="Arrow Right" src={ArrowRight}/>
      </Button>
    </Container>
    <p>{nameError}</p>
    </>
  );
}

export default Input;