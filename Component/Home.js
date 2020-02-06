import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, View, ActivityIndicator, Image, TouchableOpacity, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Style/HomeScreen.component.style.js';


export default class HomeScreen extends Component {
  
    // For to Navigation header
    static navigationOptions = {
      title: 'Album List',
    };
  
    constructor(props)
    {
      super(props);
  
      this.state = { 
        isLoading: true
      }
    }
  
    componentDidMount() {
  
      return fetch("https://jsonplaceholder.typicode.com/photos")
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
          
          <View style={styles.flatListItemSeparator} />
        );
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
                
                <View style={styles.listRowContainer}>
                    <TouchableOpacity onPress={() => navigate('DetailViewScreen', {albumImg: item.thumbnailUrl,  
                    albumDetail: item.title,  })} style={styles.listRow}>
                    <Image source = {{ uri: item.thumbnailUrl }} style={styles.imageViewContainer}/>
                    <View style={styles.listTextNavVIew}>
                        <Text   style={styles.albumTitle}> {item.title} </Text>    
                        <Ionicons name='md-arrow-dropright' style={styles.detailArrow} />
                    </View>
    
                    </TouchableOpacity>
                </View>
              }
                keyExtractor = { (item, index) => index.toString() }
                
            />
  
          </View>  
        );
      }
    }
  
  