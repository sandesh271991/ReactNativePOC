import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';  
import styles from '../style/DetailView.component.style';
import { Portal, Button, Provider, Text, Modal } from 'react-native-paper';
import GrapghCompo from './Graph';
import { Dimensions } from 'react-native';
import React from 'react';  


export default class DetailView extends React.Component {  
    static navigationOptions = {  
        title: 'Album Detail', 
    }; 

    render() {  
        {/*Using the navigation prop we can get the 
              value passed from the previous screen*/}  
        const { navigation } = this.props;  
        const album_img = navigation.getParam('albumImg', 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/sample_img.png');  
        const album_detail = navigation.getParam('albumDetail', 'some default value'); 

        return (  
          <React.Fragment>
            <Provider>

              <GrapghCompo  /> 
              
              <View style={styles.mainContainer}>
                <View style={styles.albumViewContainer}>
                    <Image source = {{ uri: album_img}} style={styles.imageView} />
                    <Text style={styles.textStyle}>{album_detail}</Text>   
                    <Button mode="contained"  
                        onPress={() => this.props.navigation.goBack()}
                        style={styles.buttonStyle}>
                        Go back
                    </Button>
                </View>
              </View> 
            </Provider>
          </React.Fragment>
      );  
    }  
}   