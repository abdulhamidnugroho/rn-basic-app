import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen
  }, 
  {
    intialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'BusinessSearch'
    }
  });

export default createAppContainer(navigator);