import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

//import { ContactStackNavigator } from "./StackNavigator";
//import TabNavigator from "./TabNavigator";
import Home from '../Screens/Home';
//import Details from '../Screens/Details/Details';
import Profile from '../Screens/Profile/Profile1';
import Setting from '../Screens/Setting/Setting'

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Setting" component={Setting} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;