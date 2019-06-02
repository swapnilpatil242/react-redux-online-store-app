import React from 'react';
import { connect } from 'react-redux';
import ProductStoreAction from '../../actions/ProductStoreAction';
import Products from "./Products";

// This is the container class file
class ProductsContainer extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchProductsDetails();
  }

  render() {
    return (
      <Products {...this.props} />
    );
  }
}

// 1st params for connecct which state we need from store
const mapStateToProps = state => {
  return {
    productDetails: state.productDetails,
  };
};

// 2nd params for connect which action need's to dispatch
const mapDispatchToProps = dispatch => {  
  return {
    actions: {
      fetchProductsDetails: () => {
        dispatch(ProductStoreAction.fetchProductsDetails());
      },
    },
  };
};
// connect pass two params
// 1: which part of state need for this component
// 2: which action need's to dispatch
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
