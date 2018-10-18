import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

import App from "../App";

var focusOnTargetSpy = jest.fn();

jest.spyOn(App.prototype, 'myFunction').mockImplementation(focusOnTargetSpy);

describe("App component testing", () => {
  it("App SnapShot", () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Provider)).toHaveLength(1);
  });
});
