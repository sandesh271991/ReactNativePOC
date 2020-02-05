import React, { Component } from 'react';

import { AppRegistry, StyleSheet, FlatList, Text, View, Alert, ActivityIndicator, Platform, Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons'; 
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import DisplayComp from './Component/Display';


class HomeScreen extends Component {

  
  // For to Navigation header
  static navigationOptions = {
    title: 'Info List',

  };

  constructor(props)
  {
    super(props);

    this.state = { 
      isLoading: true
    }
  }

  componentDidMount() {


    return fetch('https://jsonplaceholder.typicode.com/photos')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        }, function() {
          // In this block you can do something with new state.
        });
      })
      .catch((error) => {
        console.error(error);
      });
    }

    FlatListItemSeparator = () => {
      return (
        
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: "#607D8B",
          }}
        />
      );
    }

    GetFlatListItem (fruit_name) {

      Alert.alert(fruit_name);

    }


    render() {

      const { navigate } = this.props.navigation;

      if (this.state.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

      

      return (

        <View style={styles.MainContainer} >

          <FlatList
          
              data={ this.state.dataSource }
              
              ItemSeparatorComponent = {this.FlatListItemSeparator}

              renderItem={({item}) =>
              
              <View style={styles.listRow}   >
              <TouchableOpacity onPress={() => navigate('DetailScreen', {dataSend: 'Hi Sandesh'})} style={styles.listRow}>
                <Image source = {{ uri: item.thumbnailUrl }} style={styles.imageViewContainer}/>
                <Text  onPress={this.GetFlatListItem.bind(this, item.title)}  style={styles.FlatListItemStyle}> {item.title} </Text>    
                <Ionicons name='md-menu' size={32} color='black' />
              </TouchableOpacity>

              </View>
            }

              keyExtractor={(item, index) => index}
              
          />


        </View>
              
      );
    }
  }



//Styling 
const styles = StyleSheet.create({

    MainContainer :{
   
      padding: 0,
    },

    listRow :{
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'red',
      padding: 10,
      width: '100%',
        justifyContent: "space-between",
    },


    imageViewContainer: {
      width: 60,
      height: 60 ,
      margin: 10,
      borderRadius : 30,
    },

    FlatListItemStyle: {
      padding: 10,
      fontSize: 18,
      marginRight: 30,
      flexWrap: 'wrap',
      backgroundColor: 'white'
    },

    btnRefresh: {
      marginRight: 10,
      color: 'black',
      fontSize: 30,
    },

    detailNavArrow: {
      width: 30,
      minWidth: 30,
      fontSize: 30,
    }

});



const MainNavigator = createStackNavigator({
  HomeScreen: { screen: HomeScreen },
  DetailScreen: { screen: DisplayComp },
},
  {
      defaultNavigationOptions: {
          headerTintColor: '#fff',
          headerRight: <Ionicons name='md-refresh'  style={styles.detailNavArrow} />,
          headerStyle: {
              backgroundColor: 'blue',
          },
      }
  }

);


const NavigationApp = createAppContainer(MainNavigator);


export default NavigationApp

