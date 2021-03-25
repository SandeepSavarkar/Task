import React, {Component} from 'react';
import {View, TextInput, StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon1 from 'react-native-vector-icons/MaterialIcons';

class Input extends Component {
 
  render() {
    const {input, ic} = styles;
   // const err = this.props.emailerror ? null : this.props.emailerror    

    if (this.props.icon === 'person') {
      return (
        <View style={styles.section}>
          <Icon1 name={this.props.icon} style={ic}>
          </Icon1>
          <TextInput 
            style={input}
            placeholder={this.props.placeholder}
            underlineColorAndroid="transparent"
            onChangeText={this.props.onChangeText}
            //onEndEditing={this.props.onEndEditing}
            value={this.props.value}
            
          />
           <Text style={styles.verror}>{this.props.err}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.section}>
          <Icon name={this.props.icon} style={ic}>
          </Icon>
          <TextInput
            style={input}
            placeholder={this.props.placeholder}
            
            secureTextEntry={Boolean(this.props.secureText)}
            onChangeText={this.props.onChangeText}
            value={this.props.value}
            maxLength={this.props.size}
            minLength={this.props.minSize}
          />
          
          <Text style={styles.verror}>{this.props.err}</Text>

        </View>
      );
    }
  }

}

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    margin:10 ,
    borderRadius : 20,
    backgroundColor :'#e8e2e2'
  },
  ic: {
    position: 'absolute',
    left: 10,
    top: 10,
    fontSize: 28,
    fontWeight: 'bold'
  },
  input: {
    height: 40,
    width: 300,
    paddingLeft: 50,
    justifyContent: 'space-between',
    borderColor: 'gray',
    marginTop: 10 ,
    fontSize : 18
    
  },
  verror :{
     color : 'red',
     position: 'absolute',
     left: 10,
     top: 40,
     fontSize: 20 
  }
});

export default Input;
