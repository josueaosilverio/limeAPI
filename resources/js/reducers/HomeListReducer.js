import {FETCH_RECIPES} from "../actions/constants";

const initialState = [];

const HomeListReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_RECIPES:
            //fetch das recipes
            if(Array.isArray(action.payload)){
                return [...state, ...action.payload];
            }else{
                return [...state, action.payload];
            }
        default:
            return state;
    }
};
export default HomeListReducer;