//import liraries
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const Home = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(responce => responce.json())
      .then(res => {
        setState(res);
      });
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.cardBody}>
        {state?.map(item => {
          return (
            <View style={styles.textBody}>
              <Text style={styles.textStyle}>{item.id}:</Text>
              <Text style={styles.textStyle}>{item.title}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  cardBody: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
  },
  imgStyle: {
    width: '100%',
    height: 200,
    resizeMode: 'stretch',
    borderTopLeftRadius: 9,
    borderTopRightRadius: 9,
  },
  textStyle: {fontSize: 15, color: '#00aaff', marginRight: 10},
  textBody: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 1,
    width: '100%',
    padding: 10,
  },
});

//make this component available to the app
export default Home;
