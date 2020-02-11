
import React, { Component } from 'react';
import { Portal, Button, Provider, Text, Modal } from 'react-native-paper';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit';
  import { Dimensions } from 'react-native';

  export default class DetailView extends React.Component {  
    static navigationOptions = {  
        title: 'Album Detail', 
    };  

    state = {
        visible: false,
    };

    _showModal = () => this.setState({ visible: true });
    _hideModal = () => this.setState({ visible: false });

    setModalVisible(visible) {
      this.setState({modalVisible: visible});
    }

    render() {  
 
        const data = [
            { name: 'Seoul', population: 21500000, color: 'rgba(131, 167, 234, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Toronto', population: 2800000, color: '#F00', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Beijing', population: 527612, color: 'red', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'New York', population: 8538000, color: '#ffffff', legendFontColor: '#7F7F7F', legendFontSize: 15 },
            { name: 'Moscow', population: 11920000, color: 'rgb(0, 0, 255)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
          ]          
          const screenWidth = Dimensions.get('window').width;
      
          const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
          }
          const { visible } = this.state;

        return (  
            <Portal>
                <Modal visible={visible} onDismiss={this._hideModal}>
                <PieChart
                    data={data}
                    width={screenWidth}
                    height={250}
                    chartConfig={chartConfig}
                    accessor="population"
                />
                </Modal>
                <Button
                    icon="chart-bar"
                    style={{ margin: 30 }}
                    onPress={this._showModal}>
                    Show Graph
                </Button>
            </Portal>
        );  
    }  
}  