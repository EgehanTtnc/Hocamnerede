import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';

import PopularCourseList from '../components/PopularCourseComponent/PopularCoursesList';
import * as coursesActions from '../store/actions/courses';
import Colors from '../constants/Colors';

const SearchScreen = props => {
    const dispatch = useDispatch();
    const searchedCourses = useSelector(state => state.courses.searchedCourses);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [input, setInput] = useState();
    let [timeout, setTimeoutInState] = useState();

    const searchCourseFn = async (text) => {
        try {
            setIsLoading(true);
            await dispatch(coursesActions.searchCourse(text));
        } catch (err) {
            setError(err.message);
        }
        setIsLoading(false);
    }

    const debounceFn = (text) => {
        if (text.includes('%')) {
            return;
        } else {
            setInput(text);
            if (timeout) {
                clearTimeout(timeout)
                timeout = null;
            }
            setTimeoutInState(
                setTimeout(() => {
                    searchCourseFn(text);
                }, 500)
            )
        }
    }

    return (
        <View style={styles.container} >
            <SearchBar
                returnKeyType='done'
                lightTheme={true}
                containerStyle={styles.searchBar}
                inputContainerStyle={styles.inputContainerStyle}
                placeholder="Ara"
                onChangeText={debounceFn}
                onClear={() => {
                    console.log("onClear")
                }}
                value={input}
                showLoading={isLoading}
                round={true}
            />
            {error &&
                <View>
                    <Text>
                        {error}
                    </Text>
                </View>
            }
            {searchedCourses.length !== 0 ?
                <PopularCourseList
                    popularCourses={searchedCourses}
                    onSelectCourse={() => { }}
                    onSelectedSeeAll={() => { }}
                /> : null}

        </View>
    )
}

SearchScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Ders Bul"
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    searchBar: {
        width: "100%",
        backgroundColor: "white"
    },
    inputContainerStyle: {
        backgroundColor: "white"
    }
})

export default SearchScreen;