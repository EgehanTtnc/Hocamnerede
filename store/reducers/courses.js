import { GET_ALL_COURSES, GET_POPULAR_COURSES, SEARCH_COURSE } from "../actions/courses";

const initialState = {
    courses: [],
    popularCourses: [],
    searchedCourses: []
}


export default (state=initialState, action) => {
    switch(action.type){
        case GET_ALL_COURSES:
            return {
                ...state,
                courses: action.coursesData
            }
        case GET_POPULAR_COURSES:
            return {
                ...state,
                popularCourses: action.coursesData
            }
        case SEARCH_COURSE:
            return {
                ...state,
                searchedCourses: action.searchedCourses
            }
        default:
            return state;
    }
}