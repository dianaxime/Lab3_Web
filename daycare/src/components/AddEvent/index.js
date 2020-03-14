import React from 'react';
import EventForm from './addEvent';


const Event = () => (
    <div className="form">
        <label className="eventsLabel">{'Events'}</label>
        <div className="space">
            <EventForm />
        </div>      
    </div>
  );

export default Event;