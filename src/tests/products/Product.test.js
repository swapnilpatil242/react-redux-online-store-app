import React from "react";
import { shallow } from "enzyme";
import Product from "../../components/products/components/Product";

const props = {
  "productData": { 
    productName: "TEST_NAME",
    productSlug: "TEST_SLUG",
    productDesc: "TEST_DEC",
  }
};

function  getSetup() {
  const enzymeWrapper = shallow(<Product {...props} />);
  return {
    enzymeWrapper 
  }
}

describe("<Product /> component", () => {
  const { enzymeWrapper } = getSetup();
  
  test("Should render successfully", () => {
    expect(enzymeWrapper).toBeDefined();
  });

  test("Should Have product name", () => {
    expect(enzymeWrapper.find("#product-name").text()).toEqual(" TEST_NAME ");
  });

  test("Should Have product slug", () => {
    expect(enzymeWrapper.find("#product-slug").text()).toEqual(" TEST_SLUG ");
  });

  test("Should Have product desc", () => {
    expect(enzymeWrapper.find("#product-desc").text()).toEqual(" TEST_DEC ");
  });

});
