import { GET_ALL_CATEGORIES, GET_POPULAR_CATEGORIES } from "../actions/categories";

const initialState = {
    categories: [],
    popularCategories: []
}


export default (state=initialState, action) => {
    switch(action.type){
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                categories: action.categoriesData
            }
        case GET_POPULAR_CATEGORIES:
            return {
                ...state,
                popularCategories: action.categoriesData
            }
        default:
            return state;
    }
}