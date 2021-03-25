import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Keyboard , View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Touchable = (props ,{navigation}) => {
  const {sgbtn, sgtext} = styles;
  return (

  <View >
   <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ff6600', '#f5985a']} style={sgbtn}>
   <TouchableOpacity  onPress={props.onPress}>
      <Text style={sgtext}>{props.label}</Text>
    </TouchableOpacity>
   </LinearGradient>
</View> 

  );
};

// const Touchable= (props) => {
//     const { sgbtn,sgtext } = styles ;

//     return (
//         <TouchableOpacity style={sgbtn}  onPress={props.onPress

//           } >
//             <Text style={sgtext}>Sign Up</Text>
//         </TouchableOpacity>

//     )
// }

const styles = StyleSheet.create({
  sgbtn: {
    marginTop: 20,
    height: 50,
    width: 300,
    backgroundColor: 'black',
    borderRadius: 25,
    alignSelf: 'center',
  },
  sgtext: {
    justifyContent: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
export default Touchable;
