import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

const AllTeacherScreen = props => {
    return (
        <View style={styles.container} >
            <Text>
                AllTeacherScreen
            </Text>
            <Button title="Go to All Courses" onPress={() => { 
                props.navigation.navigate('AllCourses');
             }} />
            <Button title="Pop To Top" onPress={() => { 
                props.navigation.popToTop();
             }} />
        </View>
    )
}

AllTeacherScreen.navigationOptions = (navData) => {
    return {
        headerTitle: 'Teachers',
        headerRight: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Add Button"
                    iconName={'ios-add'}
                    onPress={() => {
                        navData.navigation.navigate("");
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AllTeacherScreen;