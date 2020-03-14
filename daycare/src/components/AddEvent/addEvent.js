import {v4 as uuidv4} from 'uuid';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Select  from 'react-select';
import './styles.css';

import * as actionsEvents from '../../actions/events';
import * as reducers from '../../reducers/index';

const eventType = [
    { value: 'nap', label: 'Nap'},
    { value: 'bottle', label: 'Baby Bottle'},
    { value: 'breastfeed', label: 'Breastfeed Baby'},
    { value: 'piss', label: 'Diaper Change Piss'},
    { value: 'poop', label: 'Diaper Change Poop'},
]

const EventForm = ({ onSubmit }) => {
    const [eventsNotes, changeEventsNotes] = useState('');
    return(
        <div className="eventForm">
            <Select className="selectTypes" options={eventType} placeholder="Event Type"/>
            <input className="inputNotes"
                type="text"
                placeholder="Enter notes"
                value={eventsNotes}
                onChange={e => changeEventsNotes(e.target.value)}
            />
            <button input="addEventButton"
                type="submit" onClick={() => onSubmit(eventsNotes)}
            >
                {'Create'}
            </button>
        </div>
    );
}

export default connect(
    undefined,
    dispatch => ({
        onSubmit(eventsNotes) {
            dispatch(actionsEvents.addEvent(uuidv4(), "sleep", new Date(), eventsNotes, reducers.getSelectedBaby() ,reducers.getEventsByBabyId(reducers.getSelectedBaby())));
        },
    }),
)(EventForm);