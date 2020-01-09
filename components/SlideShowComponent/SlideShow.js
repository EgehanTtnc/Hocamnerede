import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';

import SlideShowItem from './SlideShowItem';
import Colors from '../../constants/Colors';

const SlideShow = props => {
    return (
        <View style={styles.container}>
            <ScrollView
                horizontal
                pagingEnabled
                style={styles.scrollView} >
                {props.images.map(image => {
                    return (
                        <SlideShowItem image={image} key={Math.random()} />
                    )
                })}
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        backgroundColor: Colors.yellow,
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.26,
        shadowRadius: 4,
        elevation: 6
    },
    scrollView: {
        height: 200 
    }
})

export default SlideShow;