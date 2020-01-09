import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

import Colors from '../constants/Colors';

const LastItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <TouchableCmp onPress={props.onSelect} >
            <View key={9} style={[styles.lastItemContainer, {height: props.height, width: props.width}]} >
                <Text numberOfLines={2} style={styles.text} >{props.title}</Text>
            </View>
        </TouchableCmp>

    )
}

const styles = StyleSheet.create({
    lastItemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 17,
        margin: 10,
        borderRadius: 10,
        backgroundColor: Colors.gray,
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 4,
        shadowOpacity: 0.26,
        elevation: 6
    },
    text: {
        textAlign: 'center',
        fontFamily: 'open-sans-bold',
        color: Colors.accent
    }
})

export default LastItem;