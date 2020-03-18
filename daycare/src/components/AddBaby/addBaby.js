import {v4 as uuidv4} from 'uuid';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../../actions/babies';
import './styles.css';

const BabyForm = ({ onSubmit }) => {
    const [babyName, changeBabyName] = useState('');
    const [babyLastname, changeBabyLastname] = useState('');
    return(
        <div className="babyForm">
            <input className="nameInput"
                type="text"
                placeholder="Enter name"
                value={babyName}
                onChange={e => changeBabyName(e.target.value)}
            />
            <input className="nameInput"
                type="text"
                placeholder="Enter lastname"
                value={babyLastname}
                onChange={e => changeBabyLastname(e.target.value)}
            />
            <Link to="/events">
                <button className="addBabyButton"
                    type="submit" onClick={() => onSubmit(babyName, babyLastname)}
                >
                    {'Add Baby'}
                </button>
            </Link>
        </div>
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