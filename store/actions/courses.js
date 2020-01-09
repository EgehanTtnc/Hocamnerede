import ENV from '../../env';
import PopularCourse from '../../models/popularCourse';
import Course from '../../models/course';

export const GET_ALL_COURSES = 'GET_ALL_COURSES';
export const GET_POPULAR_COURSES = 'GET_POPULAR_COURSES';
export const SEARCH_COURSE = 'SEARCH_COURSE';

export const getAllCourses = () => {
    return async dispatch => {
        const response = await fetch(`https://api.hocamnerede.com/course?password=${ENV().apiKey}`);
        if (!response.ok) {
            throw new Error('Something went Wrong!');
        }
        const resData = await response.json();
        const courses = [];
        for(let i = 0;i < resData.length; i++){
            const newCourse = new Course(
                resData[i].id,
                resData[i].categoryId,
                resData[i].teacherId,
                resData[i].subcategoryId,
                resData[i].name,
                resData[i].rating,
                resData[i].content,
                resData[i].duration,
                resData[i].pictureURL,
                resData[i].price,
                resData[i].teacherFirstName,
                resData[i].teacherLastName,
                resData[i].teacherAge,
                resData[i].teacherSex,
                resData[i].teacherJob,
                resData[i].teacherCityID,
                resData[i].categoryName,
                resData[i].subCategoryName
            )
            courses.push(newCourse)
        }
        dispatch({
            type: GET_ALL_COURSES,
            coursesData: courses
        })
    }
}

export const getPopularCourses = () => {
    return async dispatch => {
        const response = await fetch(`https://api.hocamnerede.com/course/order?password=${ENV().apiKey}`);
        if (!response.ok) {
            throw new Error('Something went Wrong!');
        }
        const resData = await response.json();
        const courses = [];
        for(let i = 0;i < resData.length; i++){
            const newCourse = new PopularCourse(
                resData[i].teacherFirstName,
                resData[i].teacherLastName,
                resData[i].courseID,
                resData[i].courseRating,
                resData[i].coursePrice,
                resData[i].courseName,
                resData[i].courseImage,
                resData[i].courseCategory,
            )
            courses.push(newCourse)
        }
        dispatch({
            type: GET_POPULAR_COURSES,
            coursesData: courses
        })
    }
}

export const searchCourse = (input) => {
    return async dispatch => {
        const response = await fetch(`https://api.hocamnerede.com/search/searchbycoursename?arama=${input}&&password=${ENV().apiKey}`);
        if (!response.ok) {
            throw new Error('Something went Wrong!');
        }
        const resData = await response.json();
        console.log(resData)
        const courses = [];
        for(let i = 0;i < resData.length; i++){
            const newCourse = new PopularCourse(
                resData[i].teacherFirstName,
                resData[i].teacherLastName,
                resData[i].courseID,
                resData[i].courseRating,
                resData[i].coursePrice,
                resData[i].courseName,
                resData[i].coursePictureURL,
                resData[i].categoryName,
            )
            courses.push(newCourse)
        }
        dispatch({
            type: SEARCH_COURSE,
            searchedCourses: courses
        })
    }
}