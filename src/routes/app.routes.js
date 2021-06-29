import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/Home';
import Register from '../pages/Register';

const AppRoutes = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register/" exact component={Register} />
        </Switch>
    </Layout>
);

export default AppRoutes;