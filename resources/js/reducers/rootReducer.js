import {combineReducers} from 'redux';
import homeListReducer from './HomeListReducer';
import colecListReducer from './ColecListReducer';

import carrinhoReducer from "./carrinhoReducer";

export const rootReducer = combineReducers(
    {homeListReducer, colecListReducer, carrinhoReducer
    }
);