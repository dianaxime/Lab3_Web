import {v4 as uuidv4} from 'uuid';
import * as types from '../types/events';

export const addEvent = (eventType, notes, babyId, events) =>({
    type: types.EVENT_ADDED,
    payload: {id:uuidv4(), eventType, date: new Date(), notes, babyId, events},
});

export const deleteEvent = id => ({
    type: types.EVENT_DELETED,
    payload: id,
});
