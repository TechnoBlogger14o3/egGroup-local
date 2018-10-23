/**
* @author Vineet Mishra <vineet.m@photoninfotech.net>
* @version 1.0.0
*/

// import - npm modules
import { Actions } from 'react-native-router-flux';

export const redirectTo = (scene) => {
  if (Actions.currentScene) Actions.reset(scene);
};

export const navigateTo = (scene, props = null) => {
  if (props) {
    Actions.push(scene, props);
  } else {
    Actions[scene].call();
  }
};

export const navigateBack = () => Actions.pop();
