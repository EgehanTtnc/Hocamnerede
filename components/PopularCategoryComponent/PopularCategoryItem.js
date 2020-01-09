import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { Image } from 'react-native-elements';

const CategoryItem = props => {
    const category = props.categoryData
    return (
        <TouchableOpacity onPress={props.selectedCourse} >
            <View style={styles.container} >
                <View style={[styles.imageContainer, { borderColor: Colors.yellow }]} >
                    <Image
                        source={{ uri: category.imageUrl }}
                        style={styles.image}
                        placeholderStyle={{ backgroundColor: "white" }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>

                <View style={styles.textcontainer} >
                    <Text style={styles.text} >
                        {category.name}
                    </Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 90,
        paddingLeft: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
    },
    imageContainer: {
        borderWidth: 2,
        borderRadius: 100,
        overflow: 'hidden'
    },
    image: {
        width: 70,
        height: 70
    },
    textcontainer: {
        flex: 1,
        marginLeft: 20
    },
    text: {
        fontFamily: 'open-sans',
        fontSize: 20
    }
})

export default CategoryItem;