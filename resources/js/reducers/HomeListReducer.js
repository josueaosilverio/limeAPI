import {FETCH_RECIPES} from "../actions/constants";

const initialState = [];

const HomeListReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_RECIPES:
            //fetch das recipes
            console.log("isto é o payload");
            console.log(action.payload);
            if(Array.isArray(action.payload)){
                return [...state, ...action.payload];
            }else{
                return [...state, action.payload];
            }
        default:
            console.log("entrou no reducer 123");
            console.log(action.type);
            return state;
    }
};
export default HomeListReducer;