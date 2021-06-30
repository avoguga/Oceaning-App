import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';
import Skills from '../pages/Skills';
import SuccessRegister from '../pages/SuccessRegister';
import Sorry from '../pages/SorryPage';

const AppRoutes = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register/" exact component={Register} />
            <Route path="/skills/" exact component={Skills} />
            <Route path="/successregister/" exact component={SuccessRegister} />
            <Route path="/sorry/" exact component={Sorry} />
        </Switch>
    </Layout>
);

export default AppRoutes;