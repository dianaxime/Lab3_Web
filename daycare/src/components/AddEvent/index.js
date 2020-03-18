import React from 'react';
import EventForm from './addEvent';
import SelectBaby from './../SelectBaby';

import './styles.css';

const Event = () => (
    <div className="formEvent">
        <label className="eventsLabel">{'Events'}</label>
        <div>
            <SelectBaby />
        </div>
        <div className="showEvents">
            <div></div>
            <div>
                <EventForm />
            </div>
        </div>       
    </div>
  );

export default Event;