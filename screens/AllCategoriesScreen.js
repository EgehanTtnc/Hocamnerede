import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const AllCategoriesScreens = props => {

    const categoryName = props.navigation.getParam('categoryName');

    return (
        <View style={styles.container} >
            <Text>
                {categoryName}
            </Text>
            <Button title="Pop To Top" onPress={() => { 
                props.navigation.popToTop();
             }} />
        </View>
    )
}

AllCategoriesScreens.navigationOptions = (navData) => {
    return {
        headerTitle: navData.navigation.getParam('categoryName')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default AllCategoriesScreens;