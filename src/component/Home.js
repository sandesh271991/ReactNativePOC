import { StyleSheet, FlatList, Text, View, Image, TouchableOpacity,TouchableHighlight, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../style/Home.component.style.js';
import {ActivityIndicator } from 'react-native-paper';
import React, { Component } from 'react';
import axios from "axios";




export default class HomeScreen extends Component {

  _isMounted = false;

  
  
    // For to Navigation header
    static navigationOptions = ({ navigation }) => {
      const { params = {} } = navigation.state

      return {
        headerTitle: "Album List",
        // headerRight: () => (
        //   <Button
        //   title='Post'
        //   onPress={this._showModal}

        // />
        // ),
      };
    };

    constructor(props)
    {
      super(props);
  
      this.state = { 
        isLoading: true
      }
    }


    getAlbums() {
      this._isMounted = true;
      axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response =>
        {
          if (this._isMounted) {
          this.setState({
            isLoading: false,
            dataSource: response.data,
          }, function() {
            
          })};
        })      
      .catch(error => this.setState({ error, isLoading: false }));
      }

    componentWillUnmount() {
      this._isMounted = false;
    }
  
    componentDidMount() {
      this.getAlbums();
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
            <View style={{flex: 1, paddingTop: 30}}>
                <ActivityIndicator animating={true} size='large' />
            </View>
          );
        }  
  
        const { visible } = this.state;

        return (
  
          <View style={styles.MainContainer} >
  
            <FlatList
            
                data={ this.state.dataSource }
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                renderItem={({item}) =>
                
                <View style={styles.listRowContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailViewScreen', {albumImg: item.thumbnailUrl,  
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
  
  