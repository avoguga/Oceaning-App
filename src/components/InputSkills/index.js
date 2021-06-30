import React, {useState, useRef, useEffect} from 'react';
import { Container, InputForm, Button, InputArea, Skills, ContentArea, DataChip, ChosenSkills} from './styles';
import ArrowRight from '../../assets/icon-1.svg';
import Right from '../../assets/icon-4.svg';
import Up from '../../assets/icon-5.svg';
import { useHistory } from 'react-router';

const Input = () => {

  const history = useHistory();

  const [data, setData]=useState([]);

  const [dataSkill, setDataSkill]=useState([]);

  const [chosenSkills, setChosenSkills]=useState("");

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

  const getDataSkill=()=>{
    fetch('http://localhost:3333/chosenskills'
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
        setDataSkill(myJson);
      });
  };

  useEffect(()=>{
    getDataSkill()
  },[]);


  const handleSubmit = (e) => {
    

    history.push("/successregister")
  }

  const getDataSkills = (e) => {
     
     const info = data.filter((skills) => {
      if (searchTerm === "") {
        return ""
      } else if (skills.skillName.toLowerCase().includes(searchTerm.toLowerCase())) {
        return skills
      }
    }).map(skill => skill.skillName);

    e.preventDefault();
    const chosen = { chosenSkills }
    fetch('http://localhost:3333/chosenskills', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       },
       body: JSON.stringify(chosen)
    }).then(() =>{
      console.log('Habilidade adicionada');
    })
    
    window.location.reload(false);
  }

  const [color, setColor] = useState("#6A6879");

  const [font, setFont] = useState("#6A6879");

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
          onChange={e => { setStyle(e.target.color); setSearchTerm(e.target.value); setChosenSkills(e.target.value)}}
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
      {
        dataSkill.map((chosenSkills, key) => {
          console.log(Object.keys(chosenSkills).length)
          if (!chosenSkills) {
            return(
              <Skills>Nenhuma habilidade adicionada</Skills>
            );
          } else {
              return(
              <ChosenSkills key={key}>
                <h3>{Object.keys(chosenSkills).length} Habilidades adicionadas</h3>
                <h3>Ver habilidades <img alt="Up" src={Up}/></h3>
              </ChosenSkills>
            )
          }
        })
      }
    </Container>
  );
}

export default Input;