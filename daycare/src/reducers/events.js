import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/events';

const byId = (state = {}, action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.id]: {eventType: action.payload.eventType,
                    date: action.payload.date,
                    notes: action.payload.notes,
                },
            };
        }
        case types.EVENT_DELETED: {
            return omit(state, action.payload.id);
        }
        default: {
            return state;
        }
    }
};

const order = (state = {}, action) => {
    switch (action.type) {
        case types.EVENT_ADDED: {
            return {
                ...state,
                [action.payload.babyId]: [action.payload.events, action.payload.id]
            };
        }
        case types.EVENT_DELETED: {
            return {
                ...state,
                [action.payload.babyId]: action.payload.events.filter(e => e !== action.payload.id),
            };
        }
        default: {
            return state;
        }
    }
};

const events = combineReducers ({
    byId,
    order,
});

export default events;

export const getEvent = (state, id) => state.byId[id];

const reverseEvents = (state, babyId) => getEventsIdByBabyId(state, babyId).slice().reverse();

const getEventsIdByBabyId = ( state, babyId) => state.order[babyId];

export const getEventsByBabyId = (state, babyId) => getEventsIdByBabyId(state, babyId).map(
    id => getEvent(state, id),
).filter(event => event != null);

export const getReverseEventsByBabyId = (state, babyId) => reverseEvents(state, babyId).map(
    id => getEvent(state, id),
).filter(event => event != null);