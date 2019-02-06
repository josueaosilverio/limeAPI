import {CARRINHO_ADD, CARRINHO_DELETE} from "../actions/constants";

const initialState = [];

const carrinhoReducer = (state = initialState, action) => {
    switch(action.type){
        case CARRINHO_ADD:
            if(Array.isArray(action.payload)){
                return [...state, ...action.payload];
            }else{
                return [...state, action.payload];
            }
        case CARRINHO_DELETE:
            if(Array.isArray(action.payload)){
                //not done at all
                return [...state, ...action.payload];
            }else{
                return {...state, ...state.filter((x) => x !== action.payload)};
            }

        default:
            console.log("entrou no reducer 123");
            console.log(action.type);
            return state;
    }
};
export default carrinhoReducer;