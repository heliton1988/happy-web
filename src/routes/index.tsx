import React from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import SignIn from '../pages/SignIn';
import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import CreateOrphanage from '../pages/CreateOrphanage';
import Orphanage from '../pages/Orphanage';

const AppRoutes: React.FC = () => (
  <Switch>
    <PrivateRoute path="/" exact component={SignIn} />

    <PrivateRoute path="/dashboard" component={Landing} isPrivate />
    <PrivateRoute path="/app" component={OrphanagesMap} isPrivate />

    <PrivateRoute
      path="/orphanages/create"
      component={CreateOrphanage}
      isPrivate
    />
    <PrivateRoute path="/orphanages/:id" component={Orphanage} isPrivate />
  </Switch>
);

export default AppRoutes;
