import {CARRINHO_ADD, CARRINHO_DELETE, CARRINHO_RECEITA_REMOVE, CARRINHO_INGRE_REMOVE} from "../actions/constants";

const initialState = [];

const CarrinhoReducer = (state = initialState, action) => {
    switch(action.type) {
        case CARRINHO_ADD:


                let recipesFiltered = action.payload.receitas[action.payload.index];

                return [...state, recipesFiltered];

        case CARRINHO_DELETE:
            return [...initialState];
        case CARRINHO_RECEITA_REMOVE: {
            let posArray = state.indexOf(action.payload[0].receita);
            let stateMock = [...state];
            return [...state, ...state.filter((x) => x !== action.payload)];
        }
        case CARRINHO_INGRE_REMOVE: {
            let posArray = state.indexOf(action.payload[0].receita);

            const ingreFiltered = state[posArray].items.filter((x) => x!== action.payload[0].item);
            let stateMock = [...state];
            stateMock[posArray].items = ingreFiltered;

            return [...stateMock];
        }
        default:

            return state;
    }
};
export default CarrinhoReducer;