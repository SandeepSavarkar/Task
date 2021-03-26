import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Picker,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Touchable from '../../components/Touchable';
import login_logo from '../../assest/images/salonfinal.png';
import * as Animatable from 'react-native-animatable';
import KeyboardShift from './KeyboardShift'
import AsyncStorage from '@react-native-async-storage/async-storage';


// import validation from '../../components/ValidationUtils'
import styles from './style';
import { ScrollView } from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailerr: '',
      password: '',
      passErr: '',
    };
  }

  validateEmail = (text) => {
    debugger;
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      this.setState({email: text, emailerr: 'Email is Not Correct'});
      return false;
    } else {
      this.setState({email: text, emailerr: 'Email is Correct'});
    }
  };

  validatePass = (text) => {
    //    console.log(text);

    if (text === false) {
      //console.log('Password should not be null');
      this.setState({password: text, emailerr: 'Password should not be null'});
      return false;
    } else {
      this.setState({password: text, emailerr: 'Password should not be null'});
      //console.log('');
    }
  };


  checkAuth = async () => {
      // debugger
      try {
        let user = await AsyncStorage.getItem('user');
        let parsed = JSON.parse(user);
        //debugger
        console.log(parsed)
        if (
          parsed.email === this.state.email &&
          parsed.password === this.state.password
        )
          this.props.navigation.replace('Home');
        else {
          alert('Email or password is invalid');
          this.props.navigation.navigate('Login');
        }
      } catch (error) {
        alert(error);
      }
    };






  render() {
    const {container, regcontainer, regbtn, btn, text, img} = styles;
    console.log('inside Login')

    return (
      <SafeAreaView>
        <View style={styles.container}>
          <ImageBackground
            source={require('../../assest/images/login_bg3.jpg')}
            style={styles.img}>
            <Animatable.View animation='fadeInRight' 
              style={{
                marginTop: 100,
                backgroundColor: 'white',
                borderTopLeftRadius:50,
                borderTopRightRadius:50,
                height:600
              }}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'android' ? 'padding' : 'height'} enabled={true}>
                <ScrollView>    
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                    marginTop: 30,
                    marginBottom:20,
                    color: 'black',
                  }}>
                  Welcome Back
                </Text>
                <View style={styles.form}>
                  <Input
                    placeholder="Email"
                    icon="email"
                    onChangeText={(text) => this.validateEmail(text)}
                    value={this.state.email}
                    emailerror={this.state.emailerr}
                    
                  />
                  <Input
                    placeholder="Password"
                    icon="lock"
                    type="pass"
                    onChangeText={(text) => this.validatePass(text)}
                    secureText="true"
                  />
                  <Touchable
                    style={btn}
                    label="Login"
                    onPress={()=>this.checkAuth()}
                  />
                </View>
                <View style={regcontainer}>
                  <TouchableOpacity>
                    <Text style={{fontSize: 15}}>Forgot Your Password ??</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={regbtn}
                    onPress={() => this.props.navigation.navigate('Signup')}>
                    <Text
                      style={{
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'orange',
                        fontSize: 15,
                        fontWeight: 'bold',
                      }}>
                      Sign Up!
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* <View style={regcontainer}>
            <Text style={text}>Go to storage page!!</Text>
            <Button
              title="Storage"
              style={regbtn}
              onPress={() =>
                this.props.navigation.navigate('Auth', {
                  email: 'sandy@gmail.com'
                })
              }
            />
          </View>  */}
          </ScrollView>
              </KeyboardAvoidingView>
            </Animatable.View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    );
  }
}
export default Login;
