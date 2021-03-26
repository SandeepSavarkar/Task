import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  Touchable,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, Divider} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import styles from './style'

const Item = ({item, onPress}, props) => {
  return (
    <Animatable.View animation='fadeInLeft'  style={styles.listItem}>
      <Image
        source={item.photo}
        style={{width: 60, height: 60, borderRadius: 30}}
      />
      <View style={{alignItems: 'center', flex: 1}}>
        <Text style={{fontWeight: 'bold', fontSize: 20}}>{item.name}</Text>
        <Text>{item.position}</Text>
      </View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon1
          style={{color: 'green', fontSize: 35}}
          name="arrow-right-circle-outline"></Icon1>
      </TouchableOpacity>
      
    </Animatable.View>
  );
};
class Home extends React.Component {
  state = {
    data: [
      {
        name: 'Iron Man',
        position: 'Data Entry Clerk',
        photo: require('../../assest/images/iron_man.jpg'),
      },
      {
        name: 'Hulk',
        position: 'Sales Manager',
        photo: require('../../assest/images/hulk.jpg'),
      },
      {
        name: 'Captain America',
        position: 'Sales Manager',
        photo: require('../../assest/images/captain.jpg'),
      },
      {
        name: 'Thor',
        position: 'Medical Assistant',
        photo: require('../../assest/images/thor.jpg'),
      },
      {
        name: 'Black Panther',
        position: 'Clerical',
        photo: require('../../assest/images/black_panther.jpg'),
      },
      {
        name: 'Sasha',
        position: 'Administrative Assistant',
        photo: require('../../assest//images/widow.jpg'),
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row',backgroundColor:'#de9a11',width:'100%' ,height: 50}}>
          <Text style={styles.headText}>My Home</Text>
           <TouchableOpacity
            style={{
              backgroundColor: '#cbd4d3',
              borderRadius: 20,
              height:40,
              width:40, 
              marginLeft: 100,  
              marginTop: 5
            }}
            onPress={() => this.props.navigation.navigate('Profile')}>
            <Icon name="person" style={{fontSize: 30,alignSelf:'center'}}></Icon> 
          </TouchableOpacity> 
        </View>

        <FlatList
          style={{flex: 1 ,width:'100%'}}
          data={this.state.data}
          renderItem={({item}) => (
            <Item animation='bounceInLeft'
              item={item}
              onPress={() =>
                this.props.navigation.navigate('Details', {
                  name: item.name,
                  position: item.position,
                  photo: item.photo,
                })
              }
            />
          )}
          keyExtractor={(item) => item.name}
        />
      </View>
    );
  }
}


export default Home ;