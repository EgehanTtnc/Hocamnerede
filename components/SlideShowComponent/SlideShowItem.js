import React from 'react';
import { ImageBackground, View, Text, StyleSheet, Dimensions } from 'react-native';

const SlideShowItem = props => {
    return (
        <ImageBackground source={{ uri: props.image.url }} style={styles.bgImage} >
            <View style={styles.overlay} />
            <View style={styles.textContainer} >
                <Text style={styles.textTitle} >{props.image.title}</Text>
                <Text style={styles.textBody} >{props.image.body}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    bgImage: {
        width: Dimensions.get('window').width,
        height: 200
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    textContainer: {
        flex: 1,
        padding: 20,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        maxWidth: 300
    },
    textTitle: {
        color: 'white', 
        fontFamily: 'open-sans', 
        fontSize: 14
    },
    textBody: {
        color: 'white', 
        fontFamily: 'open-sans-bold', 
        fontSize: 18
    }
})

export default SlideShowItem;