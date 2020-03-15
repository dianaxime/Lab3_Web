import React from 'react';
import EventForm from './addEvent';


const Event = () => (
    <div className="formEvent">
        <label className="eventsLabel">{'Events'}</label>
        <div className="space">
            <EventForm />
        </div>      
    </div>
  );

export default Event;