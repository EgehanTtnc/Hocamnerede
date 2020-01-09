import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AllCoursesScreen = props => {
    return (
        <View style={styles.container} >
            <Text>
                AllCoursesScreen
            </Text>
            <Button title="Go to All Categories" onPress={() => { 
                props.navigation.navigate('AllCategories',{categoryName: "E-spor"});
             }} />
            <Button title="Pop To Top" onPress={() => { 
                props.navigation.popToTop();
             }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AllCoursesScreen;