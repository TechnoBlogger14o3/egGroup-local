import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

import {View, TouchableOpacity} from "react-native";
import ExpandCollapseView from "../../../src/components/ExpandCollapseView";

test("ExpandCollapseView SnapShot", () => {
    const wrapper = shallow(<ExpandCollapseView  title="title test"
        desc = "desc test" />);

    const render = wrapper.dive();
    render.find(TouchableOpacity).forEach(child => {
      child.simulate('onPress');
    });

    wrapper.instance().toggle();
    wrapper.instance()._animate();
    expect(wrapper.find(View)).toHaveLength(6);
});
