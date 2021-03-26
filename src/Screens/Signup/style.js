import { StyleSheet} from 'react-native'
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
       flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      width: '100%'
      
    },
    form: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      resizeMode: 'cover'
    },
    btn: {
      marginLeft: 100,
    },
    account : {
      alignSelf : 'center',
      fontSize : 30,
      fontWeight: 'bold',
      margin : 10,
      color : 'black'
    }
  });