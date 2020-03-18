import { combineReducers } from 'redux';

import * as types from '../types/babies';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.BABY_ADDED: {
            return {
                ...state, 
                [action.payload.id] : action.payload,
            };
        }
        default: {
            return state;
        }
    }
};

const order = (state = [], action) => {
    switch (action.type) {
        case types.BABY_ADDED: {
            return [...state, action.payload.id];
        }
        default: {
            return state;
        }
    }
};

const selected = (state = null, action) => {
    switch (action.type) {
        case types.BABY_ADDED: {
            return action.payload.id;
        }
        case types.BABY_SELECTED: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}

const babies = combineReducers({
    byId, 
    order, 
    selected,
});

export default babies;

export const getBaby = (state, id) => state.byId[id];
export const getBabies = state => state.order.map(
    id => getBaby(state, id),
).filter(baby => baby != null);
export const getSelectedBaby = state => state.selected;