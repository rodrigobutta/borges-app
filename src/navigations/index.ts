import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../containers/Home';
import Foo from '../screens/Foo';
import Bar from '../screens/Bar';
import Baz from '../screens/Baz';
import UserLocation from '../containers/UserLocation';

const stackNavigator = createStackNavigator(
  {
    Home,
    Foo,
    Bar,
    Baz,
    UserLocation,
  },
  { initialRouteKey: 'Home' },
);

export default createAppContainer(stackNavigator);
