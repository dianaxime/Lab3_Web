import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as reducers from '../../reducers/index';
import './styles.css';
import * as actions from '../../actions/babies';
import { Link } from 'react-router-dom';

const SelectForm = ({ babies, onChange, selectedBaby }) => {
    const [babyName, changeBabyName] = useState(selectedBaby);
    const cambio = valor => {
        changeBabyName(valor);
        onChange(valor);
    }
    return (
       <div className="selectForm">
           <h4 className="selectLabel">Baby:</h4>
            <select className="selectInput"
                onChange={e => cambio(e.target.value)}
                value={babyName}>
                    {babies.map (baby => (<option key={baby['id']} value={baby['id']}>{baby['name']+" "+baby['lastname']}</option>))}
            </select>
            <Link classname="goTo" to="/babies">{'+'}</Link>
       </div> 
    );
};

export default connect (
    state => ({
        babies: reducers.getBabies(state),
        selectedBaby: reducers.getSelectedBaby(state),
    }),
    dispatch => ({
        onChange(babyId){
            dispatch(actions.selectBaby(babyId));
        }
    }),
)(SelectForm);