import ENV from '../../env';
import Teacher from '../../models/teacher';

export const GET_ALL_TEACHERS = 'GET_ALL_TEACHERS';
export const GET_POPULAR_TEACHERS = 'GET_POPULAR_TEACHERS';

export const getAllTeachers = () => {
    return async dispatch => {
        const response = await fetch(`https://api.hocamnerede.com/teacher?password=${ENV().apiKey}`);
        if (!response.ok) {
            throw new Error('Something went Wrong!');
        }
        const resData = await response.json();
        const teachers = [];
        for(let i = 0;i < resData.length; i++){
            const newTeacher = new Teacher(
                resData[i].id,
                resData[i].firstName,
                resData[i].lastName,
                resData[i].rating,
                resData[i].age,
                resData[i].sex,
                resData[i].job,
                resData[i].lastSeen,
                resData[i].description,
                resData[i].email,
                resData[i].password,
                resData[i].telephone,
                resData[i].pictureURL,
                resData[i].active,
                resData[i].cityId
            )
            teachers.push(newTeacher)
        }
        dispatch({
            type: GET_ALL_TEACHERS,
            teachersData: teachers
        })
    }
}

export const getPopularTeachers = () => {
    return async dispatch => {
        const response = await fetch(`https://api.hocamnerede.com/teacher/order?password=${ENV().apiKey}`);
        if (!response.ok) {
            throw new Error('Something went Wrong!');
        }
        const resData = await response.json();
        const teachers = [];
        for(let i = 0;i < resData.length; i++){
            const newTeacher = new Teacher(
                resData[i].id,
                resData[i].firstName,
                resData[i].lastName,
                resData[i].rating,
                resData[i].age,
                resData[i].sex,
                resData[i].job,
                resData[i].lastSeen,
                resData[i].description,
                resData[i].email,
                resData[i].password,
                resData[i].telephone,
                resData[i].pictureURL,
                resData[i].active,
                resData[i].cityId
            )
            teachers.push(newTeacher)
        }
        dispatch({
            type: GET_POPULAR_TEACHERS,
            teachersData: teachers
        })
    }
}