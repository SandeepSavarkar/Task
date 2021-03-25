import { StyleSheet} from 'react-native'
export default StyleSheet.create({
    container: {
      flexDirection:'column',  
      justifyContent: 'center',
      alignItems: 'center',
      
    },

    img: {
    resizeMode: 'cover',
    justifyContent: "center",
    width: '100%',
    height:700
   }
    ,
    form: {
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 50,
    },
    btn: {
      marginLeft: 100,
    },
    welcomeText:{
        
    },
    regcontainer: {
      flexDirection: 'row',
      marginTop: 15,
      marginLeft:70
    },
    text: {
      fontSize: 20,
      fontWeight: '300',
      color: 'black',
      marginRight: 10,
      textDecorationLine: 'underline',
    },
    regbtn: {
      backgroundColor : 'white',
      height: 30,
      width: 100,
      borderRadius: 50,
    },
  });
  
  
  