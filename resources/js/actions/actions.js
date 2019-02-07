import {
    FETCH_RECIPES,
    FETCH_COLEC,
    CARRINHO_ADD,
    COLECCAO_DELETE,
    CARRINHO_DELETE,
    RECEITA_DELETE,
    COLECCAO_CREATE, RECEITA_ADD, CARRINHO_RECEITA_REMOVE, CARRINHO_INGRE_REMOVE
} from './constants';

//FETCHS
export const fetchRecipes = (payload) => ({type: FETCH_RECIPES, payload:payload});
export const fetchColec = (payload) => ({type: FETCH_COLEC, payload:payload});

//CARRINHO
export const carrinhoAdd = (payload) => ({type: CARRINHO_ADD, payload:payload});
export const carrinhoDelete = () => ({type: CARRINHO_DELETE});
export const carrinhoReceitaDelete = (payload) => ({type:CARRINHO_RECEITA_REMOVE, payload: payload});
export const carrinhoIngreDelete = (payload) => ({type:CARRINHO_INGRE_REMOVE, payload: payload});


//COLECCAO
export const coleccaoDelete = (payload) => ({type: COLECCAO_DELETE, payload: payload});
export const receitaDelete = (payload) => ({type: RECEITA_DELETE, payload: payload});
export const coleccaoCreate = (payload) => ({type: COLECCAO_CREATE, payload:payload});
export const receitaAdd = (payload) => ({type: RECEITA_ADD, payload:payload});



//export const receitaCarrinho = (payload) => ({type: RECEITA_CARRINHO, payload:payload});
