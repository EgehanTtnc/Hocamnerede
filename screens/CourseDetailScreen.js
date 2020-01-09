import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const CourseDetailScreen = props => {
    const courseId = props.navigation.getParam('courseId');
    return (
        <View style={styles.container} >
            <Text>CourseDetailScreen</Text>
            <Text>{courseId}</Text>
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

export default CourseDetailScreen;