import { StyleSheet } from 'react-native';


 export default StyleSheet.create({

    mainContainer: {
        flex: 1,
        alignItems: "center",
        height: 100,
        justifyContent: "center",
    },

    albumViewContainer: {
        flex: 1,
        alignItems: "center",
        width: "80%",
        justifyContent: "center",
        backgroundColor: '#dedede',
        margin: 50,
        borderRadius : 30, 
    },

    imageView: {
        width: 250,
        height: 250,
    },

    textStyle: {  
        fontSize: 23,  
        textAlign: 'center', 
        margin: 7, 
        backgroundColor: '#0c82f3',
        padding: 10,
        color: 'white',
        textAlign: 'left',
        borderRadius : 7,
        overflow: 'hidden',
    },  
  
    buttonStyle:{  
        width: "93%",  
        marginTop: 50,  
        backgroundColor: "blue",  
        height: 40,
    }  
});