import React, {useState, useRef, useEffect} from 'react';
import { Container, InputForm, Button, InputArea, Skills, ContentArea, DataChip} from './styles';
import ArrowRight from '../../assets/icon-1.svg';
import Right from '../../assets/icon-4.svg';
import { useHistory } from 'react-router';

const Input = () => {

  const history = useHistory();

  const [data, setData]=useState([]);

  const [chosenSkills, setChosenSkills]=useState([]);

  const getData=()=>{
    fetch('http://localhost:3333/skills'
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
    const skillsSetSkills = { skills }
    
    fetch('http://localhost:3333/skills', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: JSON.stringify(skillsSetSkills)
    }).then(() =>{
      console.log('Nome adicionado');
    })

    history.push("/skills")
  }

  const getDataSkills = () => {
   
     const info = data.filter((skills) => {
      if (searchTerm === "") {
        return ""
      } else if (skills.skillName.toLowerCase().includes(searchTerm.toLowerCase())) {
        return skills.skillName.current
      }
    })
    console.log(info)
    return info;
  }

  const [color, setColor] = useState("#6A6879");

  const [font, setFont] = useState("#6A6879");

  const [skills, setSkills] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [skillsError, setSKillsError] = useState("Preencha esse campo");


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
    <Container>
      <ContentArea>
        <InputArea 
        inputColor={color}
        onChange={e => setStyle(e.target.color)}>
          <InputForm
          ref={inputRef}
          inputColor={color}
          inputFont={font} 
          placeholder="Digite uma habilidade"
          onChange={e => { setStyle(e.target.color); setSearchTerm(e.target.value)}}
          type="text"
          value={searchTerm}
          />
        </InputArea>
        
        <Button onClick={handleSubmit}>
          <h2>FINALIZAR</h2>
          <img alt="Arrow Right" src={ArrowRight}/>
        </Button>
      </ContentArea>
      <DataChip onClick={getDataSkills}>
      {
            data.filter((skills) => {
              if (searchTerm === "") {
                return ""
              } else if (skills.skillName.toLowerCase().includes(searchTerm.toLowerCase())) {
                return skills
              }
            }).map((skills, key) => {
              return(
                <div key={key}>
                  <h2>{skills.skillName}</h2>
                  <img alt="Right" src={Right}/>
                </div>
              )
            })
          }
      </DataChip>
      <Skills>Nenhuma habilidade adicionada</Skills>
    </Container>
  );
}

export default Input;