//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BottomTab from './Route/BottomTab';
// create a component
const App = () => {
  return (
    <View style={styles.container}>
      <BottomTab />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#ffffff',
  },
});

//make this component available to the app
export default App;
