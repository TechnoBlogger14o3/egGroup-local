import React from "react";
import {Provider} from "react-redux";
import {shallow} from "enzyme";
import {View} from "react-native";
import configureStore from 'redux-mock-store';

import Main from "../../src/Main";

const initialState = {};

const mockStore = configureStore();

let store;

test("Main SnapShot", () => {

    beforeEach(() => {
      store = mockStore(initialState)
    });

    const wrapper = shallow(<Provider store={store}><Main /></Provider>);
    expect(wrapper.find(Main)).toHaveLength(1);
});
