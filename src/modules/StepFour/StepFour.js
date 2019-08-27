import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import FooterSection from 'modules/FooterSection';

import './style.scss';

class StepFour extends Component {
  constructor(props) {
    super(props);

    this.state = {
      useremail: '',
      firstname: '',
      lastname: '',
      phone: '',
      validated: false
    };
  }

  onChangeState = field => event => {
    this.setState({ [field]: event.target.value });
  };

  handleSubmit(event) {}

  render() {
    const { useremail, firstname, phone, validated } = this.state;

    return (
      <div className="step step4">
        <div className="step4-label step4-mainlabel">Excellent!</div>
        <div className="step-title step4-sublabel">Ready to send for a quote?</div>
        <Form
          noValidate
          validated={validated}
          onSubmit={e => this.handleSubmit(e)}
          className="step4-form"
        >
          <Form.Group controlId="validationCustom02">
            <Form.Label>Name(First, Last)</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                value={firstname}
                placeholder="Name"
                onChange={this.onChangeState('firstname')}
                required
                name="firstname"
              />
              <Form.Control.Feedback type="invalid">
                Please provide your first name.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="validationCustom04">
            <Form.Label>Phone</Form.Label>
            <InputGroup>
              <Form.Control
                type="text"
                value={phone}
                placeholder="Phone Number"
                aria-describedby="inputGroupPrepend"
                onChange={this.onChangeState('phone')}
                name="phone"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="validationCustom01">
            <Form.Label>Email</Form.Label>
            <InputGroup>
              <Form.Control
                type="email"
                value={useremail}
                placeholder="Email Address"
                onChange={this.onChangeState('useremail')}
                required
                name="useremail"
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group controlId="message" className="form-groupbox">
            <Form.Label className="form-title">Order Comments</Form.Label>
            <Form.Control
              as="textarea"
              className="form-message"
              value={this.state.message}
              rows={6}
              placeholder="Any specifics about your order that you would like us to know?"
              onChange={this.onChangeState('message')}
            />
          </Form.Group>

          <Button type="submit" variant="success" className="step4-submitbtn">
            Send for a quote
          </Button>
        </Form>
        <FooterSection isPrev={false} onNext={this.onNext} />
      </div>
    );
  }
}

export default StepFour;
