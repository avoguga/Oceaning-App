import React from 'react';

import { Grid } from './styles'

import MainHeader from '../MainHeader';
import Content from '../Content';
import MainFooter from '../MainFooter';

const Layout = ({children}) => {
  return(
    <Grid>
      <MainHeader/>
      <Content>
        {children}
      </Content>
      <MainFooter/>
    </Grid>
  )
  }
export default Layout;