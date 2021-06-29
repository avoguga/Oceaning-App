import React from 'react';
import { Container, Logo, Share} from './styles';
import oceaningLogo from '../../assets/logo.png'
import insta from '../../assets/icon-3.svg'

const MainHeader = () => {
  return(
    <Container>
      <Logo alt="Logo oceaning" src={oceaningLogo}/>
      <Share>
        <div>
          <p>COMPARTILHE</p>
          <h3>@theoceaning</h3>
        </div>
        <a href="https://www.instagram.com/theoceaning/" rel="noreferrer" target="_blank">
          <img alt="instagram" src={insta}></img>
        </a>
      </Share>
    </Container>
  );
}

export default MainHeader;