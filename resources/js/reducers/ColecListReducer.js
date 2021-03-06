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
                let posArray = state.indexOf(action.payload[0].coleccao);

                let stateMock = [...state];
                stateMock[posArray].recipes.push(action.payload[0].receita);

                return [...stateMock];
            }else{
                let posArray = state.indexOf(action.payload[0].coleccao);

                let stateMock = [...state];
                stateMock[posArray].recipes.push(action.payload[0].receita);

                return [...stateMock];
            }
        case COLECCAO_DELETE:
            return [...state.filter((x) => x.id !== action.payload.id)];
        case RECEITA_DELETE:

            let posArray = state.indexOf(action.payload[0].coleccao);
            const recipeFiltered = state[posArray].recipes.filter((x) => x !== action.payload[0].receita);
            let stateMock = [...state];
            stateMock[posArray].recipes = recipeFiltered;
            return [...stateMock];
        default:
            return state;
    }
};

export default ColecListReducer;