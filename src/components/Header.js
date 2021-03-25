import React, { Component } from 'react'
import { Image ,StyleSheet,View } from 'react-native'

const Header =(props) => {
        return (
            <View style={styles.container}>
                <Image
                style={styles.img}
                source={props.image}
                />
            </View>
        )
    }


const styles = StyleSheet.create({
  container :{
    justifyContent : 'center',
    alignSelf : 'center'
  }, 
  img: {  
      width: 250,
      height: 200,
      resizeMode: 'stretch',
    }
  });



export default Header