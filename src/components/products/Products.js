import React from 'react';
import Product from './components/Product'

const Products = (props) => {
  const productList = props.productDetails && props.productDetails.map((product, key) => 
    <Product productData={product} key={key} />
  );
  return (
    <table>
      <thead>
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {productList}
      </tbody>
    </table>
  );
}

export default Products;