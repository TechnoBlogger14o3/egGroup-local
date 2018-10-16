import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

import {TouchableOpacity} from "react-native";
import Card from "../../../src/components/Card";

test("Main SnapShot", () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find(TouchableOpacity)).toHaveLength(1);
});
