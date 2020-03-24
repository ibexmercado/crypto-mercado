import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DependencyContext from "./common/contexts/DependencyContext";
import { GraphQL } from "./features/app/components";
import { Authenticate } from "./features/authentication/screens";
import { Approval } from "./features/kyc/screens";
import { routes } from "./routes";

const App: React.FC = () => {
  const dependencies = React.useContext(DependencyContext);

  return (
    <DependencyContext.Provider value={dependencies}>
      <GraphQL>
        <Router>
          <Route path={routes.root} exact component={Authenticate} />

          <Route path={routes.kyc.approval} exact component={Approval} />
        </Router>
      </GraphQL>
    </DependencyContext.Provider>
  );
};

export default App;