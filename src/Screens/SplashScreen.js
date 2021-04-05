import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import mainlogo from '../assest/images/salon.gif';
import * as Animatable from 'react-native-animatable';
//import Index from '../Authentication/'

const SplashScreen = ({navigation}) => {
  // console.log('inside splash screen')
  setTimeout(() => {
    navigation.replace('Login');
  }, 3000);
  return (
    <View style={styles.container}>
      <Animatable.Image
        animation="bounceInDown"
        source={mainlogo}
        style={styles.logo}
      />
      <Text style={styles.shopName}>Cutify</Text>
      <Text style={styles.rights}>@Cutify.org All Rights reserved</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    height: 200,
    width: 300,
    borderRadius: 100,
  },
  shopName: {
    fontSize: 30,
    color: 'black',
    fontWeight: '500',
  },
  right: {
    fontSize: 15,
    marginTop: 200,
  },
});

export default SplashScreen;
