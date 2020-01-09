import React from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';

import LastItem from '../LastItem';
import PopularTeacherItem from './PopularTeacherItem';
import Colors from '../../constants/Colors';

const PopularTeacherList = props => {
    const popularTeachers = props.popularTeachers;
    let counter = 0;
    return (
        <View style={styles.container} >
            <View style={styles.titleContainer} >
                <View style={styles.titleTextContainer} >
                    <Text style={styles.titleText} ellipsizeMode='tail' numberOfLines={1} >POPÜLER HOCALAR</Text>
                </View>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => props.onSelectedSeeAll('teachers', 'all')} >
                    <Text style={styles.buttonText} >TÜMÜNÜ GÖR</Text>
                </TouchableOpacity>
            </View>
            <View style={{ height: 220 }} >

                <ScrollView
                    contentContainerStyle={{ paddingRight: 15, paddingLeft: 10 }}
                    style={{ paddingLeft: 10 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    pagingEnabled
                    snapToInterval={190}
                    snapToAlignment='start'
                    decelerationRate='fast' >

                    {popularTeachers.map((teacher, index) => {
                        counter++;
                        if (counter !== popularTeachers.length) {
                            return (
                                <PopularTeacherItem teacherData={teacher} key={index} selectedTeacher={() => props.onSelectTeacher(teacher.id)} />
                            )
                        } else {
                            return (
                                <View style={{ flexDirection: 'row' }} key={index} >
                                    <PopularTeacherItem teacherData={teacher} key={index} selectedTeacher={() => props.onSelectTeacher(teacher.id)} />
                                    <LastItem key={9} title="Şehrindekileri Tüm Hocaları Gör" height={200} width={170} onSelect={() => props.onSelectedSeeAll('teachers', 'incity')} />
                                </View>
                            )
                        }


                    })}

                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    titleContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: "100%",
        paddingTop: 10,
        paddingLeft: 30,
        paddingRight: 15,
    },
    titleTextContainer: {
        maxWidth: Dimensions.get('window').width * 7,
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

export default PopularTeacherList;