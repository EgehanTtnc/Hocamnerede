import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import HeaderButton from '../components/HeaderButton';
import * as teachersActions from '../store/actions/teachers';
import * as coursesActions from '../store/actions/courses';
import * as categoriesActions from '../store/actions/categories';
import PopularTeacherList from '../components/PopularTeacherComponent/PopularTeacherList';
import PopularCourseList from '../components/PopularCourseComponent/PopularCoursesList';
import PopularCategoryList from '../components/PopularCategoryComponent/PopularCategoryList';
import SlideShow from '../components/SlideShowComponent/SlideShow';


const HomeScreen = props => {
    const [error, setError] = useState(null);
    const [images, setImages] = useState([]);

    const dispatch = useDispatch();

    const popularTeachers = useSelector(state => state.teachers.popularTeachers);
    const popularCourses = useSelector(state => state.courses.popularCourses);
    const popularCategories = useSelector(state => state.categories.popularCategories);

    const getPopulars = useCallback(async () => {
        try {
            await dispatch(teachersActions.getPopularTeachers());
            await dispatch(coursesActions.getPopularCourses());
            await dispatch(categoriesActions.getPopularCategories());
        } catch (err) {
            setError(err.message);
        }
    }, [dispatch])


    useEffect(() => {
        setImages([
            {
                url: 'https://api.hocamnerede.com/images/fatmakara.png',
                title: 'Bu Kış',
                body: 'Hayallerini Gerçekleştir!'
            },
            {
                url: 'https://api.hocamnerede.com/images/kemalakdogan.png',
                title: 'Diladiğin Zaman Arayıp',
                body: 'Randevu Alabilirsin.'
            },
            {
                url: 'https://api.hocamnerede.com/images/niyazibelci.png',
                title: 'Sınavlara Hazırlanırken Korkmana Gerek Yok',
                body: 'Hocalarımız Yanında!'
            }
        ])
        getPopulars();
    }, [getPopulars, dispatch, setImages])

    const onSelectTeacherHandler = (id) => {
        props.navigation.navigate('TeacherProfile',{teacherId: id, fromWhere: 'popularTeacherComponent'});
    }

    const onSelectCourseHandler = (id) => {
        props.navigation.navigate('CourseDetail',{courseId: id, fromWhere: 'popularCourseComponent'});
    }

    const onSelectCategoryHandler = (id) => {
        alert(id)
    }

    // what -> teachers, courses, categories
    // option -> all, incity
    const onSelectSeeAllHandler = (what, option) => {
        alert(what + " " + option)
    }

    if (popularTeachers.length === 0 || popularCourses.length === 0 || popularCategories.length === 0) {
        return (
            <View style={styles.container} >
                <ActivityIndicator />
            </View>
        )
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.container} >

                <SlideShow images={images} />

                <PopularTeacherList 
                    popularTeachers={popularTeachers} 
                    onSelectTeacher={onSelectTeacherHandler} 
                    onSelectedSeeAll={onSelectSeeAllHandler} 
                />
                <PopularCourseList 
                    popularCourses={popularCourses} 
                    onSelectCourse={onSelectCourseHandler} 
                    onSelectedSeeAll={onSelectSeeAllHandler}
                />
                <PopularCategoryList 
                    popularCategories={popularCategories} 
                    onSelectCategory={onSelectCategoryHandler} 
                    onSelectedSeeAll={onSelectSeeAllHandler}
                />

                {/* 
                <View style={{ flex: 1 }} >
                    <Text style={styles.text} >
                        HomeScreen
                </Text>
                    <Button
                        title="Go to All Teachers"
                        onPress={() => {
                            props.navigation.navigate('AllTeachers');
                        }}
                    />
                    <Button
                        onPress={getPopulars}
                        color={Colors.accent}
                        title="Get All Teachers"
                        icon="ios-home"
                        iconLeft
                    />
                </View>*/}
            </View>
        </ScrollView>
    )
}

HomeScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Hocam Nerede",
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
        ),
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title='Menu' iconName={'ios-menu'} onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'open-sans',
    }
})

export default HomeScreen;