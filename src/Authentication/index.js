import React, {Component} from 'react';
// import {
//   NavigationContainer,
//   TouchableOpacity,
//   View,
//   Text,
// } from '@react-navigation/native';
// // import SplashScreen from '../Screens/SplashScreen';
// // import Auth from './Auth';
// // import NonAuth from './NonAuth'
import {Image, View,Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Checkbox } from 'react-native-paper';
import Auth from './Auth'
import NonAuth from './NonAuth'

// // import mainlogo from './src/assest/main_logo.jpg';

// //const Stack = createStackNavigator();

// // const SplashScreen = ({navigation}) => 
// //   setTimeout(() => {
// //     navigation.replace('Login');
// //   }, 3000);
// //   return (
// //     <View>
// //       <Image source={mainlogo} />
// //     </View>
// //   );
// // };

export default class index extends Component {
    
    state={
        userExits : false
    }

    componentDidMount(){
        this.check();
    }
    check = async () =>{
        try {
            let user = await AsyncStorage.getItem('user');
            let parsed = JSON.parse(user);
            //console.log(parsed.email)
            if(parsed !== null)
            {
                    this.setState({userExits : true})    
            }
            else
            {
                this.setState({userExits : false})    
            }
                
        }
        catch (error) {
            alert(error);
          }
    }
    
    render() {
            if(this.state.userExits)
                return <Auth />
            else
                return <NonAuth />
    }            
}
    //   <NavigationContainer>
    //     <Stack.Navigator initialRouteName="SplashScreen" >
    //       <Stack.Screen name="SplashScreen" component={SplashScreen} options={{headerShown:false}}/>
    //       <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
    //       <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
    //       <Stack.Screen name="Auth" component={Auth} options={{headerShown:false}}></Stack.Screen>
    //       <Stack.Screen name="Home" component={Home} options={{headerShown:false}}></Stack.Screen>
    //       <Stack.Screen name="Details" component={Details} options={{headerShown:false}}></Stack.Screen>
    //       <Stack.Screen name="Profile" component={Profile} options={{
    //         title: 'My Profile',
    //         headerStyle: {
    //           backgroundColor: '#de9a11',
    //         },
    //         headerTintColor: '#fff',
    //         headerTitleStyle: {
    //           fontWeight: 'bold',
    //         },
    //       }}></Stack.Screen>
    //     </Stack.Navigator>
    //   </NavigationContainer>
        


// export default Main;
