import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';

const Item =({item, onPress},props)=> {
  return (
      
      <View style={styles.listItem}>
        <Image
          source={item.photo}
          style={{width: 60, height: 60, borderRadius: 30}}
        />
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
          <Text>{item.position}</Text>
        </View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }} 
          >
          <Text style={{color: 'green'}}>Click</Text>
        </TouchableOpacity>
      </View>
  );
}

export default class Home1 extends React.Component {
  state = {
    data: [
      {
        name: 'Iron Man',
        position: 'Data Entry Clerk',
        photo: require('../assest/iron_man.jpg'),
      },
      {
        name: 'Hulk',
        position: 'Sales Manager',
        photo: require('../assest/hulk.jpg'),
      },
      {
        name: 'Captain America',
        position: 'Sales Manager',
        photo: require('../assest/captain.jpg'),
      },
      {
        name: 'Thor',
        position: 'Medical Assistant',
        photo: require('../assest/thor.jpg'),
      },
      {
        name: 'Black Panther',
        position: 'Clerical',
        photo: require('../assest/black_panther.jpg'),
      },
      {
        name: 'Sasha',
        position: 'Administrative Assistant',
        photo: require('../assest/widow.jpg'),
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.headText}>Item List(Home Screen)</Text>
        <FlatList
          style={{flex: 1}}
          data={this.state.data}
          renderItem={({item}) => <Item 
          item={item} onPress={()=>this.props.navigation.navigate('Details')}
          />}
          keyExtractor={(item) => item.name} 
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 10,
  },
  headText:{
      justifyContent: 'center',
      alignSelf:'center',
        fontSize : 25 ,
        fontWeight :'200',
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});
