import React, { Component } from 'react';
import { connect } from 'react-redux';
import { King } from 'redux/actions';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductItem from 'components/ProductItem';
import productData from 'utils/ProductData';
import FooterSection from 'modules/FooterSection';
import history from 'browserHistory';

import './style.scss';

class StepThree extends Component {
  constructor() {
    super();

    this.state = {
      products: []
    };
  }
  handleHatCount = name => evt => {
    let validProducts = [];

    productData.map(item => {
      if (item.name === name) {
        item.value = evt.target.value;
      }
      return item;
    });

    productData.forEach(item => {
      if (parseInt(item.value) > 0) {
        validProducts.push(item);
      }
    });

    this.props.setProducts(validProducts);
  };

  onPrev = () => {
    history.push('/step2');
  };

  onNext = () => {
    history.push('/step4');
  };

  render() {
    const { products } = this.props;

    return (
      <div className="step3">
        <div className="step products">
          <Row>
            {productData.map((item, index) => {
              return (
                <Col key={`item_${index}`} md={6}>
                  <ProductItem key={`item_${index}`} item={item} onChange={this.handleHatCount} />
                </Col>
              );
            })}
          </Row>
        </div>
        <FooterSection onPrev={this.onPrev} onNext={this.onNext} isDisabled={!products.length} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products
});

const mapDispatchToProps = dispatch => ({
  setProducts: products => dispatch(King.setProductsRequest(products))
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default withConnect(StepThree);
