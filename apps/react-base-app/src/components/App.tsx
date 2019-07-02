import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Login = lazy(() => import("../containers/login/Login"));
const Dashboard = lazy(() => import("../containers/dashboard/Dashboard"));
const Reports = lazy(() => import("../containers/reports/Reports"));

import Navigation from "./navigation/Navigation";
import NotFound from "./NotFound";

const App: React.FC<{}> = ({}) => {
  return (
    <div>
      <Router>
        <Navigation />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/login" component={Login} />
            <Route path="/reports" component={Reports} />
            <Route path="/implicit/callback" component={NotFound} />
            <Route component={Dashboard} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;
