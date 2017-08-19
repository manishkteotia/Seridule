import { TabNavigator } from "react-navigation";

import MyShows from '../screens/myshows';
import AddShows from '../screens/addshows'

const MainScreenNavigator = TabNavigator({
  Shows: { screen: MyShows },
  AddShow: { screen: AddShows },
});

export default MainScreenNavigator;
