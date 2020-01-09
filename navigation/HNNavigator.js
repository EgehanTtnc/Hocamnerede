import React, { useEffect } from 'react';
import { View, SafeAreaView, Platform, Dimensions, ScrollView } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import * as categoriesActions from '../store/actions/categories';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator, DrawerNavigatorItems } from 'react-navigation-drawer';

import Button from '../components/Button';
import HomeScreen from '../screens/HomeScreen';
import AllTeachersScreen from '../screens/AllTeachersScreen';
import AllCoursesScreen from '../screens/AllCoursesScreen';
import AllCategoriesScreen from '../screens/AllCategoriesScreen';
import TeacherProfileScreen from '../screens/TeacherProfileScreen';
import CourseDetailScreen from '../screens/CourseDetailScreen';
import SearchScreen from '../screens/SearchScreen';

const defaultNavOptions = {
    headerTintColor: Colors.accent,
    headerMode: 'float',
    headerStyle: {
        backgroundColor: ''
    },
    headerTitle: 'A Screen',
    headerTitleStyle: {
        fontSize: 15,
        fontFamily: 'open-sans-bold',
        color: Colors.primary
    },
};


const HomeStack = createStackNavigator({
    Home: HomeScreen,
    AllTeachers: AllTeachersScreen,
    AllCourses: AllCoursesScreen,
    AllCategories: AllCategoriesScreen,
    TeacherProfile: TeacherProfileScreen,
    CourseDetail: CourseDetailScreen
}, {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: defaultNavOptions
});

const SearchStack = createStackNavigator({
    Search: SearchScreen,
    TeacherProfile: TeacherProfileScreen,
    CourseDetail: CourseDetailScreen
}, {
    defaultNavigationOptions: defaultNavOptions
});

const HNTabNavigator = createBottomTabNavigator({
    HomeTab: {
        screen: HomeStack,
        navigationOptions: {
            title: 'ANA SAYFA',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-home" size={25} color={tabInfo.tintColor} />
            }
        }
    },
    Search: {
        screen: SearchStack,
        navigationOptions: {
            title: 'KURS ARA',
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-search" size={25} color={tabInfo.tintColor} />
            }
        }
    },
}, {
    tabBarOptions: {
        activeTintColor: Colors.accent,
        labelStyle: {
            fontSize: 13,
            fontFamily: 'open-sans'
        }
    }
});

const DrawerNavigator = createDrawerNavigator({
    HomePage: {
        screen: HNTabNavigator,
        navigationOptions: {
            title: 'Home',
            drawerIcon: ({ tintColor }) => (
                <Ionicons
                    name="ios-home"
                    size={25}
                    color={tintColor}
                />
            )
        },
    },
    Settings: {
        screen: SearchStack,
        navigationOptions: {
            title: 'Settings',
            drawerIcon: ({ tintColor }) => (
                <Ionicons
                    name="ios-settings"
                    size={25}
                    color={tintColor}
                />
            )
        },
    }

}, {
    drawerType: 'back',
    hideStatusBar: true,
    keyboardDismissMode: 'none',
    drawerWidth: Dimensions.get('window').width * 0.8,
    contentOptions: {
        activeTintColor: Colors.accent,
        activeBackgroundColor: 'white',
        inactiveTintColor: Colors.primary,
        inactiveBackgroundColor: 'white',
        labelStyle: {
            fontWeight: '400',
            fontFamily: 'open-sans'
        },
        iconContainerStyle: {
            opacity: 1
        },
        itemsContainerStyle: {
            marginVertical: 0
        },

    },
    contentComponent: props => {
        const dispatch = useDispatch();

        useEffect(() => {

        }, [])

        return (
            <View style={{ flex: 1 }} >
                <SafeAreaView style={{ flex: 1 }} forceInset={{ top: 'always', horizontal: 'never' }}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                        <View style={{ flex: 1 }} >
                            <DrawerNavigatorItems {...props} />
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }} >
                        <Button icon="ios-contact" title="Üye Ol" color={Colors.primary} onPress={() => {
                            dispatch(categoriesActions.getAllCategories());
                            props.navigation.closeDrawer();
                        }} />
                        <Button icon="ios-log-in" title="Oturum Aç" color={Colors.accent} onPress={() => {
                            props.navigation.closeDrawer();
                        }} />
                    </View>
                </SafeAreaView>
            </View>
        );
    }
})


export default createAppContainer(DrawerNavigator);