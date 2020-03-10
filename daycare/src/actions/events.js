import * as types from '../types/events';

export const addEvent = (id, eventType, notes, babyId, events) =>({
    type: types.EVENT_ADDED,
    payload: {
        id, 
        eventType, 
        date: new Date(), 
        notes,
        babyId, 
        events
    },
});

export const deleteEvent = (id, babyId, events) => ({
    type: types.EVENT_DELETED,
    payload: {
        id, 
        babyId, 
        events
    },
});
