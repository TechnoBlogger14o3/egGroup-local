import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

import {View} from "react-native";
import Button from "../../../src/components/Button";

test("Main SnapShot", () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.find(View)).toHaveLength(2);
});
