import {combineReducers} from 'redux';

import HomeListReducer from './HomeListReducer';
import ColecListReducer from './ColecListReducer';
import CarrinhoReducer from "./CarrinhoReducer";

export const rootReducer = combineReducers(
    {HomeListReducer, ColecListReducer, CarrinhoReducer
    }
);