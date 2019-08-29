import React, { Component } from 'react';
import { connect } from 'react-redux';
import { King } from 'redux/actions';
import PositionSelect from 'components/PositionSelect';
import logoPosData from 'utils/LogoPosData';
import FooterSection from 'modules/FooterSection';
import history from 'browserHistory';

import './style.scss';

class StepTwo extends Component {
  constructor() {
    super();

    this.state = {
      logoPos: ''
    };
  }

  handleLogoPos = value => () => {
    this.props.setHatLogoPos(value);
  };

  onPrev = () => {
    history.push('/step1');
  };

  onNext = () => {
    history.push('/step3');
  };

  render() {
    const { hatLogoPos } = this.props;

    return (
      <div className="step2">
        <div className="step logo-pos">
          <div className="step-title mt-4">Select where you would like your logo on hat?</div>
          {logoPosData.map((item, index) => {
            return (
              <PositionSelect
                key={`item_${index}`}
                mainTitle={item.mainTitle}
                subTitle={item.subTitle}
                value={item.value}
                selectedPos={hatLogoPos}
                onClick={this.handleLogoPos}
              />
            );
          })}
        </div>
        <FooterSection onPrev={this.onPrev} onNext={this.onNext} isDisabled={hatLogoPos === ''} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  hatLogoPos: state.hatLogoPos
});

const mapDispatchToProps = dispatch => ({
  setHatLogoPos: pos => dispatch(King.setHatLogoPosRequest(pos))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect(StepTwo);
