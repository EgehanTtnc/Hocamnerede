import React from 'react';
import { View, StyleSheet, Text, Dimensions, ActivityIndicator } from 'react-native';
import _ from 'lodash';

import PopularCategoryItem from './PopularCategoryItem';
import Colors from '../../constants/Colors';
import Button from '../Button';

const PopularCategoriesList = props => {
    const popularCategories = props.popularCategories;
    let counter = 0;
    return (
        <View style={styles.container} >
            <View style={styles.titleContainer} >
                <View style={styles.titleTextContainer} >
                    <Text style={styles.titleText} ellipsizeMode='tail' numberOfLines={1} >POPÜLER KATEGORİLER</Text>
                </View>
            </View>
            {!_.isEmpty(popularCategories) ?

                popularCategories.map((category, index) => {
                    counter++;
                    if (counter !== popularCategories.length) {
                        return (
                            <PopularCategoryItem categoryData={category} key={index} selectedCourse={() => props.onSelectCategory(category.id)} />
                        )
                    } else {
                        return (
                            <View key={index} >
                                <PopularCategoryItem categoryData={category} selectedCourse={() => props.onSelectCategory(category.id)} />
                                <Button
                                    title="Tüm Kategorileri Gör"
                                    color={Colors.accent}
                                    icon={"md-arrow-forward"}
                                    onPress={() => props.onSelectedSeeAll('categories', 'all')}
                                />
                            </View>

                        )
                    }
                })
                :
                <View style={{ height: 420, width: "100%", justifyContent: 'center', alignItems: 'center' }} >
                    <ActivityIndicator />
                </View>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 10
    },
    titleContainer: {
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 15
    },
    titleTextContainer: {
        maxWidth: Dimensions.get('window').width * 6,
    },
    titleText: {
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('window').width <= 320 ? 18 : 22
    },
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 3
    },
    buttonText: {
        textAlign: "right",
        color: Colors.accent,
        fontFamily: 'open-sans-bold',
        fontSize: Dimensions.get('window').width <= 320 ? 8 : 10
    }
})

export default PopularCategoriesList;