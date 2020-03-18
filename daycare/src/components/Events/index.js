import React from 'react';
import { connect } from 'react-redux';

import * as actionsEvents from '../../actions/events';
import * as reducers from '../../reducers/index';
import './styles.css';

const Events = ({babyId, thisEvent, pastEvents, onSubmit}) => (
    <div className="Events">
        <div className="One">
            <h4 className="infoLabel">{"Type: "+thisEvent['eventType']}</h4>
            <h4 className="infoLabel">{"Date: "+thisEvent['date'].toLocaleString()}</h4>
            <h4 className="infoLabel">{"Notes: "+thisEvent['notes']}</h4>
        </div> 
        <button className="deleteButton"
        type="submit" onClick={() => onSubmit(babyId, pastEvents)}>
            {'x'}
        </button> 
    </div> 
);   


export default connect (
    (state, { id }) => ({
        babyId: reducers.getSelectedBaby(state),
        thisEvent: reducers.getEvent(state, id),
        pastEvents: reducers.getEventsIdByBabyId(state, reducers.getSelectedBaby(state)),
    }),
    (dispatch, { id }) => ({
        onSubmit(babyId, pastEvents){
            dispatch(actionsEvents.deleteEvent(id, babyId, pastEvents));
        }
    }),
)(Events);