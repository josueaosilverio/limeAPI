import {COLECCAO_DELETE, FETCH_COLEC, RECEITA_DELETE, COLECCAO_CREATE, RECEITA_ADD} from "../actions/constants";

const initialState = [];

const ColecListReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_COLEC:
            //fetch das recipes
            if(Array.isArray(action.payload)){
                return [...state, ...action.payload];
            }else{
                return [...state, action.payload];
            }
        case COLECCAO_CREATE:
            if(Array.isArray(action.payload)){
                return [...state, ...action.payload];
            }else{
                return [...state, action.payload];
            }
        case RECEITA_ADD:
            if(Array.isArray(action.payload)){
                return [...state, ...action.payload];
            }else{
                return [...state, action.payload];
            }
        case COLECCAO_DELETE:
            console.log("coleccao_delete");
            return {...state, ...state.filter((x) => x !== action.payload)};
        case RECEITA_DELETE:
            console.log("receita delete");
            return{...state, ...state.filter((x) => x !== action.payload)};
        default:
            return state;
    }
};

export default ColecListReducer;