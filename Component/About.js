import React from 'react';
import { StyleSheet, Text, View, Alert, ScrollView, Image, Button, AsyncStorage } from 'react-native';
import { createAppContainer } from 'react-navigation';




class About extends React.Component {
    static navigationOptions = {
        title: 'ABout',
    };

    state = {

        item : 'storing data loading.....'
    }

    async componentDidMount() {

        this.setState ({
            item : await AsyncStorage.getItem('mykey')

           })
    }

    storeData = async () => {
        try {
          await AsyncStorage.setItem('mykey', 'Sandesh gettimg from local data');

        } catch (error) {
            console.log(error)
        }
        console.log(this.state)
      };


      deleteData = async () => {
        try {
          await AsyncStorage.removeItem('mykey', async ()=> {
            console.log('deleted')
            this.setState ({
                item : await AsyncStorage.removeItem('mykey')
    
               })
          })
          if (value !== null) {
            // We have data!!
            console.log(value);
          }
        } catch (error) {
            console.log(error)
        }
        console.log(this.state)
      };



    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>
                    {this.props.navigation.getParam('dataSend')}
            </Text>
                <Button
                    title="Go to back to home Screen"
                    onPress={() => this.props.navigation.goBack()}>
                    Navigate
                    </Button> 

                    <Button
                    title="Local Data Store"
                    onPress={() => this.storeData()}>
                    </Button> 
                    <Button
                    title="Delete Local Data Store"
                    onPress={() => this.deleteData()}>
                    </Button> 

                
                        <Text> {this.state.item} </Text>
                    
                    
            </View>
        );
    }
}

export default About