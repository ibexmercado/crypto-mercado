import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PrivateRoute } from "./common/components";
import DependencyContext from "./common/contexts/DependencyContext";
import { RequestLink, ResetPassword } from "./features/accountRecovery/screens";
import { GraphQL } from "./features/app/components";
import { Authenticate } from "./features/authentication/screens";
import { Home } from "./features/home/screens";
import {
  Done,
  SendEmailVerificationCode,
  SetBankAccount,
  SetPassword,
  UploadGovernmentID,
  VerifyEmail,
} from "./features/onboarding/screens";
import { TermsAndConditions } from "./features/termsAndConditions/screens";
import { TransactionDetails, TransactionsIndex } from "./features/transaction/screens";
import { Checkout as BuyCheckout } from "./features/transaction/screens/buy";
import { Checkout as SellCheckout } from "./features/transaction/screens/sell";
import { routes } from "./routes";

const App: React.FC = () => {
  const dependencies = React.useContext(DependencyContext);

  return (
    <DependencyContext.Provider value={dependencies}>
      <GraphQL>
        <Router>
          <Switch>
            <Route path={routes.root} exact component={Home} />

            {/* AUTHENTICATION */}
            <Route path={routes.authentication.signIn} exact component={Authenticate} />

            {/* ONBOARDING */}
            <Route
              path={routes.onboarding.sendEmailVerificationCode}
              exact
              component={SendEmailVerificationCode}
            />
            <Route path={routes.onboarding.verifyEmail} exact component={VerifyEmail} />
            <Route path={routes.onboarding.setPassword} exact component={SetPassword} />
            <Route
              path={routes.onboarding.uploadGovernmentID}
              exact
              component={UploadGovernmentID}
            />
            <Route
              path={routes.onboarding.setBankAccount}
              exact
              component={SetBankAccount}
            />
            <Route path={routes.onboarding.done} exact component={Done} />

            {/*TERMS AND CONDITIONS*/}
            <Route
              path={routes.legal.termsAndConditions}
              exact
              component={TermsAndConditions}
            />

            {/*ACCOUNT RECOVERY */}
            <Route
              path={routes.recovery.requestAccountRecoveryLink}
              exact
              component={RequestLink}
            />

            <Route exact path={routes.recovery.resetPassword} component={ResetPassword} />

            {/* TRANSACTION */}
            <PrivateRoute
              path={routes.dashboard.transactions.index}
              exact
              component={TransactionsIndex}
            />
            <PrivateRoute
              path={routes.dashboard.transactions.details}
              exact
              component={TransactionDetails}
            />

            {/* SELL */}
            <PrivateRoute
              path={routes.dashboard.sell.checkout}
              exact
              component={SellCheckout}
            />

            {/* BUY */}
            <PrivateRoute
              path={routes.dashboard.buy.checkout}
              exact
              component={BuyCheckout}
            />
          </Switch>
        </Router>
      </GraphQL>
    </DependencyContext.Provider>
  );
};

export default App;
