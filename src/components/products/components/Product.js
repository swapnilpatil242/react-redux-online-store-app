import React from 'react';

const Product = ({productData}) => {
  return(
    <tr>
      <td> {productData.productName} </td>
      <td> {productData.productSlug} </td>
      <td> {productData.productDesc} </td>
    </tr>
  );
}

export default Product;
