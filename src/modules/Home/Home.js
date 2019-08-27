import React, { Component } from 'react';
// import { Row, Col } from 'react-bootstrap';
import KingWizard from 'react-stepzilla';
import Container from 'components/Container';
import StepOne from 'modules/StepOne';
import StepTwo from 'modules/StepTwo';
import StepThree from 'modules/StepThree';
import StepFour from 'modules/StepFour';

import './style.scss';

class Home extends Component {
  render() {
    const steps = [
      { name: 'StepOne', component: <StepOne /> },
      { name: 'StepTwo', component: <StepTwo /> },
      { name: 'StepThree', component: <StepThree /> },
      { name: 'StepFour', component: <StepFour /> }
    ];

    return (
      <Container className="main-container">
        <div className="step-section">
          <KingWizard steps={steps} />
        </div>
      </Container>
    );
  }
}

export default Home;
