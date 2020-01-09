import { GET_ALL_TEACHERS, GET_POPULAR_TEACHERS } from "../actions/teachers";

const initialState = {
    teachers: [],
    popularTeachers: []
}


export default (state=initialState, action) => {
    switch(action.type){
        case GET_ALL_TEACHERS:
            return {
                ...state,
                teachers: action.teachersData
            }
        case GET_POPULAR_TEACHERS:
            return {
                ...state,
                popularTeachers: action.teachersData
            }
        default:
            return state;
    }
}