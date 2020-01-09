import { LOGIN } from "../actions/user";

const initialState = {
    user: []
}


export default (state=initialState, action) => {
    switch(action.type){
        case LOGIN:
            

        default:
            return state;
    }
}