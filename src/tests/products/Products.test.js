import React from "react";
import { shallow, mount } from "enzyme";
import Products from "../../components/products/Products";
import Product from "../../components/products/components/Product";

const props = {
  "productDetails": [
    {
      "productDesc": "TEXT_DESC_1",
      "productName": "TEXT_NAME_1",
      "productSlug": "TEXT_SLUG_1"
    },
    {
      "productDesc": "TEXT_DESC_2",
      "productName": "TEXT_NAME_2",
      "productSlug": "TEXT_SLUG_2"
    },
    {
      "productDesc": "TEXT_DESC_3",
      "productName": "TEXT_NAME_3",
      "productSlug": "TEXT_SLUG_3"
    }
  ]
}

function getSteup() {
  const enzymeWrapper = shallow(<Products {...props} />)
  const enzymeMount = mount(<Products {...props} />)
  return {
    enzymeWrapper,
    enzymeMount
  }
}

describe("<Products /> Component", () => {
  const { enzymeWrapper, enzymeMount } = getSteup();
  // print console log with debugs
  // console.log(enzymeWrapper.debug());
  console.log();
  
  it("Should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });

  it("Should have <Product /> components", () => {
    expect(enzymeMount.find(Product)).toHaveLength(3);
  });
});
