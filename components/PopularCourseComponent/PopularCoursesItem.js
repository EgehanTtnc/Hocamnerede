import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ActivityIndicator, Platform, TouchableNativeFeedback } from 'react-native';
import { Image } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const PopularCourseItem = props => {
    const course = props.courseData;
    const teacherFullName = course.teacherFirstName + " " + course.teacherLastName;
    const courseRating = course.courseRating;
    let stars = [];
    let isHalf = courseRating % 1 === 0 ? false : true

    for (let i = 0; i < courseRating; i++) {
        if (i < courseRating) {
            stars.push('yes')
        } else {
            stars.push('no')
        }
    }
    if (isHalf) {
        stars = stars.splice(0, stars.length - 1);
        stars.push('half');
    }
    if (stars.length !== 5) {
        let kalan = 5 - stars.length;
        for (let i = 0; i < kalan; i++) {
            stars.push('no')
        }
    }

    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
            <TouchableCmp onPress={props.selectedCourse}>
                <View style={styles.itemContainer} >
                    <View style={styles.imageContainer} >
                        <Image
                            source={{ uri: course.courseImage }}
                            style={styles.image}
                            placeholderStyle={{ backgroundColor: "white" }}
                            PlaceholderContent={<ActivityIndicator />}
                        />
                    </View>
                    <View style={styles.infoContainer} >
                        <Text
                            style={styles.text}
                            ellipsizeMode='tail'
                            numberOfLines={2}
                        >
                            {course.courseName}
                        </Text>
                        <Text
                            style={[styles.text, styles.textJob]}
                            ellipsizeMode='tail'
                            numberOfLines={1}
                        >
                            {course.courseCategory}
                        </Text>
                        <Text
                            style={[styles.text, styles.textTeacherName]}
                            ellipsizeMode='tail'
                            numberOfLines={1}
                        >
                            {teacherFullName}
                        </Text>
                    </View>
                    <View style={styles.ratingContainer} >
                        {stars.map(star => {
                            if (star === 'yes') {
                                return (
                                    <View style={{ margin: 1 }} key={Math.random()} >
                                        <Ionicons name="ios-star" color={Colors.yellow} size={16} />
                                    </View>

                                )
                            } else if (star === 'half') {
                                return (
                                    <View style={{ margin: 1 }} key={Math.random()} >
                                        <Ionicons name="ios-star-half" color={Colors.yellow} size={16} />
                                    </View>
                                )
                            } else {
                                return (
                                    <View style={{ margin: 1 }} key={Math.random()} >
                                        <Ionicons name="ios-star-outline" color={Colors.yellow} size={16} />
                                    </View>
                                )
                            }

                        })}
                        <View style={{ marginLeft: 2, justifyContent: "flex-start", alignItems: 'flex-start' }} >
                            <Text style={{ textAlign: 'left', fontSize: 15, fontFamily: 'open-sans' }}>
                                {courseRating.toString().replace(/\./g, ",")}
                            </Text>
                        </View>
                    </View>
                    <View style={{ width: "100%", justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: 10, fontFamily: 'open-sans' }} >
                            <Text style={{ fontFamily: 'open-sans-light' }} >(1.234)</Text>
                        </Text>
                    </View>
                    <View style={styles.priceContainer} >
                        <Text ellipsizeMode='tail' numberOfLines={1} >
                            <Text style={styles.discountText} >₺ 999,99</Text>  <Text style={styles.priceText}>₺ {course.coursePrice}</Text> <Text style={styles.minuteText} >/ 60 dakika</Text>
                        </Text>
                    </View>
                </View>
            </TouchableCmp>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        height: 265,
        width: 200,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
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
        elevation: 4
    },
    imageContainer: {
        overflow: 'hidden',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: "100%",
        height: 120
    },
    image: {
        width: "100%",
        height: "100%"
    },
    infoContainer: {
        width: "100%",
        paddingTop: 5,
        paddingHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        color: Colors.primary,
        textAlign: 'center',
        fontFamily: 'open-sans-bold'
    },
    textJob: {
        fontSize: 12,
        fontFamily: 'open-sans-light-italic'
    },
    textTeacherName: {
        fontSize: 13,
        fontFamily: 'open-sans-light'
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'flex-end',
        flex: 1,
        width: "100%",
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    },
    priceContainer: {
        justifyContent: 'flex-end',
        alignItems: "center",
        padding: 5,
        overflow: 'hidden',
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        width: "100%"
    },
    discountText: {
        color: Colors.primary,
        textDecorationLine: 'line-through',
        fontSize: 12,
        fontFamily: 'open-sans-light-italic'
    },
    priceText: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary,
        fontSize: 16,
    },
    minuteText: {
        color: Colors.primary,
        fontSize: 10,
        fontFamily: 'open-sans-light-italic'
    }
})

export default PopularCourseItem;