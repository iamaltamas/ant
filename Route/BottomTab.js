//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screen/Home/Home';
import List from '../screen/List/List';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

// create a component
const BottomTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <FontAwesome
                    name="home"
                    size={20}
                    color={focused ? '#C9651D' : '#3d1d3f'}
                  />
                  <Text style={{color: focused ? 'orange' : '#fff'}}>•</Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="List"
          component={List}
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <FontAwesome
                    name="list"
                    size={20}
                    color={focused ? '#C9651D' : '#3d1d3f'}
                  />
                  <Text style={{color: focused ? 'orange' : '#fff'}}>•</Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default BottomTab;
