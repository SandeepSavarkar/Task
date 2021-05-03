import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//import { ContactStackNavigator } from "./StackNavigator";
//import TabNavigator from "./TabNavigator";
import Home from '../Screens/Home';
//import Details from '../Screens/Details/Details';
import Profile from '../Screens/Profile/Profile1';
import Setting from '../Screens/Setting/Setting';
import BottomNavigation from '../Navigation/BottomNavigation';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import { View,Text } from 'react-native';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <View>
        <Text>Hello Sandy</Text>
      </View>
      <Drawer.Screen
        name="Home"
        component={BottomNavigation}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon1
              name="person"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="cog-outline"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={Setting}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon name="help" size={size} color={focused ? '#7cc' : '#ccc'} />
          ),
        }}
      />
      <Drawer.Screen
        name="Logout"
        component={Setting}
        options={{
          drawerIcon: ({focused, size}) => (
            <Icon
              name="arrow-right-bold-box"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
