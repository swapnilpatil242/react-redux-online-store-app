import React from 'react';
import Question from "./components/Question";

const Products = (props) => {
  console.log("........=>" + JSON.stringify(props));
  return <Question question={props} />;
}

export default Products;