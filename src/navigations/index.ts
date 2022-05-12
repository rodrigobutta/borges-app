import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../containers/Home';
import Foo from '../screens/Foo';
import Bar from '../screens/Bar';
import Baz from '../screens/Baz';
import UserLocation from '../containers/UserLocation';
import Sensors from '../screens/Sensors';
import SensorAccelerometer from '../screens/SensorAccelerometer';

const stackNavigator = createStackNavigator(
  {
    Home,
    Foo,
    Bar,
    Baz,
    UserLocation,
    Sensors,
    SensorAccelerometer,
  },
  { initialRouteKey: 'Home' },
);

export default createAppContainer(stackNavigator);
