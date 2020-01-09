import ENV from '../../env';
import Category from '../../models/category';

export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES';
export const GET_POPULAR_CATEGORIES = 'GET_POPULAR_CATEGORIES';

export const getAllCategories = () => {
    return async dispatch => {
        const response = await fetch(`https://api.hocamnerede.com/category?password=${ENV().apiKey}`);
        if (!response.ok) {
            throw new Error('Something went Wrong!');
        }
        const resData = await response.json();
        const categories = [];
        for(let i=0; i<resData.length; i++){
            const newCategory = new Category(
                resData[i].id,
                resData[i].name,
                resData[i].categoryPictureURL,
                resData[i].counter
            );
            categories.push(newCategory);
        }
        dispatch({
            type: GET_ALL_CATEGORIES,
            categoriesData: categories
        })
    }
}

export const getPopularCategories = () => {
    return async dispatch => {
        const response = await fetch(`https://api.hocamnerede.com/category/order?password=${ENV().apiKey}`);
        if (!response.ok) {
            throw new Error('Something went Wrong!');
        }
        const resData = await response.json();
        const categories = [];
        for(let i=0; i<resData.length; i++){
            const newCategory = new Category(
                resData[i].id,
                resData[i].name,
                resData[i].categoryPictureURL,
                resData[i].counter
            );
            categories.push(newCategory);
        }
        dispatch({
            type: GET_POPULAR_CATEGORIES,
            categoriesData: categories
        })
    }
}