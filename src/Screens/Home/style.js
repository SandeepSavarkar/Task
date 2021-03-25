import { StyleSheet} from 'react-native'
export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',  
    },
    headText: {
      fontWeight: 'bold',
      fontSize: 20,
      margin : 10,
      marginLeft:150,
      color: '#fff'
    },
    listItem: {
      margin: 10,
      padding: 10,
      backgroundColor: '#FFF',
      width: '90%',
      flex: 1,
      alignSelf: 'center',
      flexDirection: 'row',
      borderRadius: 10,
    },
  });