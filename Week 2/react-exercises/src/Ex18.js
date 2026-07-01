import React from "react";
import { mount, shallow } from "enzyme";
import CohortDetails from "./CohortDetails";
import { CohortData } from "./Cohort";
import renderer from "react-test-renderer";

describe("Cohort Details Component", () => {
  
  // Test 1: should create the component
  test("should create the component", () => {
    const wrapper = shallow(<CohortDetails />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test 2: should initialize the props
  test("should initialize the props", () => {
    const wrapper = mount(
      <CohortDetails cohort={CohortData[0]} />
    );

    expect(wrapper.props().cohort).toEqual(CohortData[0]);
  });

  // Test 3: should display cohort code in h3
  test("should display cohort code in h3", () => {
    const wrapper = mount(
      <CohortDetails cohort={CohortData[0]} />
    );

    const h3Text = wrapper.find("h3").text();
    expect(h3Text).toContain(CohortData[0].cohortCode);
  });

  // Test 4: should always render same html (snapshot test)
  test("should always render same html", () => {
    const tree = renderer
      .create(<CohortDetails cohort={CohortData[0]} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});