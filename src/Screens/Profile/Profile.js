import React, { Component } from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './style'
class  Profile extends Component {

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
          let user = await AsyncStorage.getItem('user');
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
      render(){

      

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 15}}>
        <Icon name="panda"  style={{fontSize: 80}}/>

          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {
              marginTop:15,
              marginBottom: 5,
            }]}>{this.state.fname + ' ' + this.state.lname}</Title>
            <Caption style={styles.caption}></Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        
        <View style={styles.row}>
          <Icon name="phone"  size={20}/>
          <Text style={{ marginLeft: 20}}>{this.state.mobile}</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email"  size={20}/>
          <Text style={{ marginLeft: 20}}>{this.state.email}</Text>
        </View>
      </View>

    </SafeAreaView>
  );
};
}
export default Profile;

