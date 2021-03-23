import React from 'react';
import {View, Text, Image} from 'react-native';

export default function Details(props, {route}) {
  const {name, position, photo} = props.route.params;
  console.log(name);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          borderRadius: 10,
          overflow: 'hidden',
          backgroundColor: 'grey',
          padding: 10,
        }}>
        <Image source={photo} style={{width:250,height:400}}/>
        <Text style={{fontSize: 20, fontWeight: '100',color:'white',alignSelf:'center'}}>{name}</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold',alignSelf:'center'}}>{position}</Text>
      </View>
    </View>
  );
}
