import {RECEITA_CARRINHO} from "../actions/constants";

const initialState = [];

const receitaCarrinhoReducer = (state = initialState, action) => {
    switch(action.type){
        case RECEITA_CARRINHO:
            //fetch das recipes
            console.log("action.payload =");
            console.log(action.payload);
            if(Array.isArray(action.payload)){
                return [...state, ...action.payload];
            }else{
                return [...state, action.payload];
            }

        default:
            return state;
    }
};

export default receitaCarrinhoReducer;