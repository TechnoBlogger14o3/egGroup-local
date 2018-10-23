import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";

import {View, TouchableOpacity} from "react-native";
import ExpandCollapseView from "../../../src/components/ExpandCollapseView";

describe("ExpandCollapseView Component", () => {
    it("should render component", () => {
        const wrapper = shallow(<ExpandCollapseView  title="title test" desc = "desc test" />);
        expect(wrapper.find(View)).toHaveLength(6);
    });

    it("should click on TouchableOpacity", () => {
        const wrapper = shallow(<ExpandCollapseView  title="title test" desc = "desc test" />);
        const render = wrapper.dive();
        render.find(TouchableOpacity).forEach(child => {
          child.simulate('onPress');
        });
    });

    it("should call toggle", () => {
        const wrapper = shallow(<ExpandCollapseView  title="title test" desc = "desc test" />);
        wrapper.instance().toggle();
        expect(wrapper.find(View)).toHaveLength(6);
    });

    it("should call _animate", () => {
        const wrapper = shallow(<ExpandCollapseView  title="title test" desc = "desc test" />);
        wrapper.instance()._animate();
        expect(wrapper.find(View)).toHaveLength(6);
    });
})
