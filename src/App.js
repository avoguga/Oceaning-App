import React from 'react';
import GlobalStyles from './styles/GlobalStyles';

import Layout from './components/Layout'
import Home from './pages/Home'
const App = () =>{
  return(
    <>
      <GlobalStyles/>
      <Layout>
        <Home/>
      </Layout>
    </>
  );
}

export default App;