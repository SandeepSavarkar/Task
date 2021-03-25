import React from 'react'
import {Text,Image, View,StyleSheet} from 'react-native';
import mainlogo from '../assest/images/main_logo.jpg';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('Login');
  }, 5000);
  return (
    <View style={styles.container}>
      <Animatable.Image animation='bounceInDown' source={mainlogo} style={styles.logo} />
      <Text style={styles.shopName}>Cutify</Text>
      <Text style={styles.rights} >@Cutify.org All Rights reserved</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container :{
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
      },
  logo : {
    height: 150,
    width : 150,
    borderRadius :25
  },
  shopName:{
    fontSize:30,
    color : "black" ,
    fontWeight : "500"
  },
  rights:{
      fontSize : 15, 
      marginTop : 200
  }
})


export default SplashScreen
