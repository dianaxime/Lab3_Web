import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as reducers from '../../reducers/index';
import './styles.css';
import * as actions from '../../actions/babies';

const SelectForm = ({ babies, onChange }) => {
    const [babyName, changeBabyName] = useState('');
    return (
       <div className="selectForm">
           <h4 className="selectLabel">Your baby is: </h4>
            <select className="selectInput"
                onChange={e => changeBabyName(e.target.value)}
                value={babyName}
                onMouseLeave={onChange(babyName)}>
                    {babies.map (baby => (<option key={baby['id']} value={baby['id']}>{baby['name']+" "+baby['lastname']}</option>))}
            </select>
       </div> 
    );
};

export default connect (
    state => ({
        babies: reducers.getBabies(),
    }),
    dispatch => ({
        onChange(babyId){
            dispatch(actions.selectBaby(babyId));
        }
    }),
)(SelectForm);