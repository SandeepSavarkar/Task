import React, {Component} from 'react';
import {Platform, StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
import Home from '../Screens/Home';
import Details from '../Screens/Details/Details';
import Profile from '../Screens/Profile/Profile1';
import BottomNavigation from '../Navigation/BottomNavigation';
import DrawerNavigation from '../DrawerNavigation/DrawerNavigation'
//import Login from '../Screens/Login';
//import Home from '../Screens/Home';
const Stack = createStackNavigator();

class Auth extends Component {
  // state = {
  //   email: '',
  //   password: '',
  // };

  // checkAuth = async () => {
  //   // debugger
  //   try {
  //     let user = await AsyncStorage.getItem('user');
  //     let parsed = JSON.parse(user);
  //     //debugger

  //     if (
  //       parsed.email === this.state.email &&
  //       parsed.password === this.state.password
  //     )
  //       this.props.navigation.replace('Home');
  //     else {
  //       alert('Email or password is invalid');
  //       this.props.navigation.navigate('Login');
  //     }
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // componentDidMount() {
  //   const {email, password} = this.props.route.params;

  //   this.setState({email: email, password: password});

  //  // const obj = AsyncStorage.getItem('USER');

  //   // let obj = {
  //   //   name: 'Sandy',
  //   //   email: 'sandy@gmail.com',
  //   //   password: 'sandy123',
  //   // };
  // //  /*AsyncStorage.setItem('user',user);*/
  //  // AsyncStorage.setItem('user', JSON.stringify(obj));
  //   this.checkAuth();
  // }

  render() {
    //const {email, password} = this.props.route.params;
    // console.log(email + ' ' + password);

    //const u = JSON.stringify(email)

    //const email1 = JSON.stringify(email)

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Home"
            component={DrawerNavigation}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Details"
            component={Details}
            options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{
              title: 'My Profile',
              headerStyle: {
                backgroundColor: '#de9a11',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default Auth;
