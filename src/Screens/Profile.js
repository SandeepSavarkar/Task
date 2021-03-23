import React from 'react';
import {View, Text, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Component} from 'react';

class Profile extends Component {
  // try {
  //     let user =  AsyncStorage.getItem('USER');
  //     let parsed = JSON.parse(user);
  //     //debugger
  //     console.log(parsed.name)

  //   } catch (error) {
  //     alert(error);
  //   }

  state = {
    fname: '',
    lname: '',
    email: '',
    moblie: '',
    password: '',
  }
  componentDidMount(){
        this.displayData();
    }
  displayData = async () => {
    // debugger
    try {
      let user = await AsyncStorage.getItem('USER');
      let parsed = JSON.parse(user);
    
      this.setState({
        fname : parsed.fname,
        lname : parsed.lname,
        email : parsed.email,
        mobile : parsed.mobile,
        password : parsed.password,
    })
      console.log(parsed.email)      
    } catch (error) {
      alert(error);
    }
  };

  
  render() {

    
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                  
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              alignSelf: 'center',
            }}>Name  : {this.state.fname + ' ' + this.state.lname}</Text>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>Email : {this.state.email} </Text>
             <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              alignSelf: 'center',
            }}>Mobile : {this.state.mobile} </Text>
      </View>
    );
  }
}
export default Profile;
