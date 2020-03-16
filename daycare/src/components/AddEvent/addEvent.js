import {v4 as uuidv4} from 'uuid';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actionsEvents from '../../actions/events';
import * as reducers from '../../reducers/index';

import './styles.css';

const eventType = [
    [0, 'nap', 'Nap'],
    [1, 'bottle', 'Baby Bottle'],
    [2, 'breastfeed', 'Breastfeed Baby'],
    [3, 'piss', 'Diaper Change Piss'],
    [4, 'poop', 'Diaper Change Poop'],
]

const EventForm = ({ babyId, pastEvents, eventType, onSubmit }) => {
    const [eventsNotes, changeEventsNotes] = useState('');
    const [eventSelected, changeEventSelected] = useState('');
    return(
        <div className="eventForm">
            <h4 className="eventsLabel">Event Type:</h4>
            <select className="eventInput"  
                onChange={e => changeEventSelected(e.target.value)}
                value={eventSelected}> 
                {eventType.map(type => (<option key={type[0]} value={type[1]}>{type[2]}</option>))} 
            </select>
            <input className="eventInput"
                type="text"
                placeholder="Enter notes"
                value={eventsNotes}
                onChange={e => changeEventsNotes(e.target.value)}
            />
            <button className="addBabyButton"
                    type="submit" onClick={() => onSubmit(babyId, eventSelected, eventsNotes, pastEvents)}>
                    {'Create'}
            </button>
        </div>
    );
}

export default connect(
    state => ({
        babyId: reducers.getSelectedBaby(state),
        pastEvents: reducers.getEventsIdByBabyId(state, reducers.getSelectedBaby(state)),
        eventType,
    }),
    dispatch => ({
        onSubmit(babyId, eventSelected, eventsNotes, pastEvents) {
            console.log(pastEvents);
            dispatch(actionsEvents.addEvent(uuidv4(), eventSelected, new Date(), eventsNotes, babyId , pastEvents));
        },
    }),
)(EventForm);