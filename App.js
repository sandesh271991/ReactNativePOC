import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; 
import DetailView from './Component/DetailView';
import HomeScreen from './Component/Home';


const MainNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  DetailViewScreen: { screen: DetailView },
  },
  {
    defaultNavigationOptions: {
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#0c82f3',
      },
      headerTitleStyle: {  
        fontWeight: 'bold',  
      }, 
    }
  }
);

const NavigationApp = createAppContainer(MainNavigator);
export default NavigationApp

//Styling 
const styles = StyleSheet.create({
  
  MainContainer :{
    padding: 0,
  },

  detailNavArrow: {
    width: 30,
    minWidth: 30,
    fontSize: 30,
    marginLeft: 30,
  },

});