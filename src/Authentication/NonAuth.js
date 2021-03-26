import React, {Component} from 'react';
import {
  NavigationContainer,
  TouchableOpacity,
  Text,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../Screens/SplashScreen';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
// import Auth from './src/Authentication/Auth';
import Home from '../Screens/Home';
import Details from '../Screens/Details/Details';
import Profile from '../Screens//Profile/Profile';

// import {Image, View} from 'react-native';
// import mainlogo from './src/assest/main_logo.jpg';

const Stack = createStackNavigator();

// const SplashScreen = ({navigation}) => {
//   setTimeout(() => {
//     navigation.replace('Login');
//   }, 3000);
//   return (
//     <View>
//       <Image source={mainlogo} />
//     </View>
//   );
// };

class NonAuth extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen" >
           <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/> 
          <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
          <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
          {/* <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}}></Stack.Screen> */}
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name="Details" component={Details} options={{headerShown:false}}></Stack.Screen>
          <Stack.Screen name="Profile" component={Profile} options={{
             title: 'My Profile',
            headerStyle: {
              backgroundColor: '#de9a11',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}> 
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default NonAuth;
