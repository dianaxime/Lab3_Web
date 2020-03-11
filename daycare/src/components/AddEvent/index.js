import {v4 as uuidv4} from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actionsEvents from '../../actions/events';
import * as reducers from '../../reducers/index';

const BabyForm = ({ onSubmit }) => {
    const [eventsNotes, changeEventsNotes] = useState('');
    return(
        <Fragment>
            <input
                type="text"
                placeholder="Enter notes"
                value={eventsNotes}
                onChange={e => changeEventsNotes(e.target.value)}
            />
            <button
                type="submit" onClick={() => onSubmit(eventsNotes)}
            >
                {'Add Event'}
            </button>
        </Fragment>
    );
}

export default connect(
    undefined,
    dispatch => ({
        onSubmit(eventsNotes) {
            dispatch(actionsEvents.addEvent(uuidv4(), "sleep", new Date(), eventsNotes, reducers.getSelectedBaby() ,reducers.getEventsByBabyId(reducers.getSelectedBaby())));
        },
    }),
)(BabyForm);