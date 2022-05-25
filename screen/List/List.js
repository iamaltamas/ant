//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';

// create a component
const List = () => {
  const [state, setState] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(responce => responce.json())
      .then(res => {
        setState(res);
      });
  }, []);
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={{marginTop: 10}}
        data={state}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.listBody}>
            <Image style={styles.imgStyle} source={{uri: item.url}} />
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  imgStyle: {
    width: '90%',
    height: 200,
    resizeMode: 'stretch',
    borderRadius: 10,
  },
  listBody: {flex: 1, alignItems: 'center', margin: 8},
});

//make this component available to the app
export default List;
