import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout';
import Home from '../pages/home';
import Register from '../pages/register';

const AppRoutes = () => (
    <Layout>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/list/:type" exact component={Home} />
            <Route path="/skills/:type" exact component={Home} />
            <Route path="/register/:type" exact component={Register} />
            <Route path="/sucess/:type" exact component={Register} />
        </Switch>
    </Layout>
);

export default AppRoutes;