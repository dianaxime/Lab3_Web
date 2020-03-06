import {v4 as uuidv4} from 'uuid';
import * as types from '../types/babies';

export const addBaby = (name, lastname) => ({
    type: types.BABY_ADDED,
    payload: {id: uuidv4(), name, lastname},
});

export const selectBaby = id => ({
    type: types.BABY_SELECTED,
    payload: id,
});
