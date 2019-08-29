import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import history from 'browserHistory';

import Container from 'components/Container';
import StepOne from 'modules/StepOne';
import StepTwo from 'modules/StepTwo';
import StepThree from 'modules/StepThree';
import StepFour from 'modules/StepFour';

import 'styles/global.scss';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Container className="main-view">
          <Switch>
            <Route path="/step1" component={StepOne} />
            <Route path="/step2" component={StepTwo} />
            <Route path="/step3" component={StepThree} />
            <Route path="/step4" component={StepFour} />
            <Redirect from="/" to="/step1" />
          </Switch>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;
