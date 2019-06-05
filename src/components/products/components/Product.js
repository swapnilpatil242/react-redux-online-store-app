import React from 'react';

const Product = ({productData}) => {
  return(
    <tr>
      <td id="product-name"> {productData.productName} </td>
      <td id="product-slug"> {productData.productSlug} </td>
      <td id="product-desc"> {productData.productDesc} </td>
    </tr>
  );
}

export default Product;
