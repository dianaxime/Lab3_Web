import React from 'react';
import { connect } from 'react-redux';
import EventForm from './addEvent';
import SelectBaby from './../SelectBaby';
import Event from './../Events';
import * as reducers from '../../reducers/index';

import './styles.css';

const Events = ({babyEvents}) => (
    <div className="formEvent">
        <label className="eventsLabel">{'Events'}</label>
        <div>
            <SelectBaby />
        </div>
        <div className="showEvents">
            <div>
                {
                    babyEvents.lenght === 0 ? (
                        <h1 className="eventsLabel">
                            {'No hay eventos para este bebe'}
                        </h1>
                    ) : (
                        babyEvents.map(
                            id => (
                                <Event 
                                    key={id}
                                    id={id}
                                />
                            ),
                        )
                    )
                }
            </div>
            <div>
                <EventForm />
            </div>
        </div>       
    </div>
  );

export default connect(
    state => ({
        babyEvents: reducers.reverseEvents(state, reducers.getSelectedBaby(state)),
    }),
)(Events);