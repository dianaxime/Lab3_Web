import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import babies, * as babiesSelectors from './babies';
import events, * as eventsSelectors from './events';

const reducer = combineReducers({
    babies,
    events,
    routing: routerReducer,
});

export default reducer;

export const getBaby = (state, id) => babiesSelectors.getBaby(state.babies, id);

export const getBabies = state => babiesSelectors.getBabies(state.babies);

export const getSelectedBaby = state => babiesSelectors.getSelectedBaby(state.babies);

export const getEvent = (state, id) => eventsSelectors.getEvent(state.events, id);

export const getEventsIdByBabyId = ( state, babyId) => eventsSelectors.getEventsIdByBabyId(state.events, babyId);

export const reverseEvents = (state, babyId) => eventsSelectors.reverseEvents(state.events, babyId);

export const getEventsByBabyId = (state, babyId) => eventsSelectors.getEventsByBabyId(state.events, babyId);

export const getReverseEventsByBabyId = (state, babyId) => eventsSelectors.getReverseEventsByBabyId(state.babies, babyId);