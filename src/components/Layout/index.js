import React from 'react';

import { Grid } from './styles'

import MainHeader from '../mainHeader';
import Content from '../content';
import MainFooter from '../mainFooter';
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