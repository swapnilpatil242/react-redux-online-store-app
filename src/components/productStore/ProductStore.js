import React from 'react';
import './ProductStore.css';
import { connect } from 'react-redux';
import ProductStoreAction from '../../actions/ProductStoreAction';

// This is the container class file
class ProductStore extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchProductsDetails();
  }

  render() {
    console.log("data=>", this.props.productDetails);
    return (
      <div className="ProductList">
        ProductStore where admin can edit delete data.....
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductStore);
