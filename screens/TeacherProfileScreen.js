import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const TeacherProfileScreen = props => {
    const teacherId = props.navigation.getParam('teacherId');
    const fromWhere = props.navigation.getParam('fromWhere');
    let teacher;
    if(fromWhere === 'popularTeacherComponent'){
        const popularTeacher = useSelector(state => state.teachers.popularTeachers);
        teacher = popularTeacher.find(teacher => {
            return teacher.id === teacherId
        });
    }else if(fromWhere === 'allTeachersScreen'){
        const popularTeacher = useSelector(state => state.teachers.teachers);
        teacher = popularTeacher.find(teacher => {
            return teacher.id === teacherId
        });
    }
    
    console.log(teacher.firstName)
    return (
        <View style={styles.container} >
            <Text>TeacherProfileScreen</Text>
            <Text>{teacher.firstName}</Text>
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

export default TeacherProfileScreen;