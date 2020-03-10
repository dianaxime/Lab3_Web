import {v4 as uuidv4} from 'uuid';
import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions/babies';

const BabyForm = ({ onSubmit }) => {
    const [babyName, changeBabyName] = useState('');
    const [babyLastname, changeBabyLastname] = useState('');
    return(
        <Fragment>
            <input
                type="text"
                placeholder="Enter name"
                value={babyName}
                onChange={e => changeBabyName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter lastname"
                value={babyLastname}
                onChange={e => changeBabyLastname(e.target.value)}
            />
            <button
                type="submit" onClick={() => onSubmit(babyName, babyLastname)}
            >
                {'Add Baby'}
            </button>
        </Fragment>
    );
}

export default connect(
    undefined,
    dispatch => ({
        onSubmit(babyName, babyLastname) {
            dispatch(actions.addBaby(uuidv4(), babyName, babyLastname));
        },
    }),
)(BabyForm);