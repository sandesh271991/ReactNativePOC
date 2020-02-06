import React from 'react';  
import { StyleSheet, View, Text, Button, Image } from 'react-native';  
import styles from '../Style/DetailScreen.component.style.js';

  
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
            <View style={styles.mainContainer}>
                <View style={styles.albumViewContainer}>
                    <Image source = {{ uri: album_img}} style={styles.imageView} />
                    <Text style={styles.textStyle}>{album_detail}</Text>  
                    <Button  
                        title="Go back"  
                        onPress={() => this.props.navigation.goBack()}
                        style={styles.buttonStyle}  
                    />  
                </View>
            </View>   
        );  
    }  
}   