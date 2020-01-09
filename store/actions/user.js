export const LOGIN = 'LOGIN';

export const addUser = (user) => {
    return {
        type: LOGIN,
        userData: user
    }
}