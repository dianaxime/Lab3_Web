import React from 'react';
import BabyForm from './addBaby';
import { connect } from 'react-redux';
import * as selectors from '../../reducers';


const Baby = ({ number }) => (
    <div className="form">
        <label className="babiesLabel">{ number === 0 ? ('No Babies') : ('Babies')}</label>
        <div className="space">
            <BabyForm />
        </div>      
    </div>
  );

export default connect (
    state => ({
        number: selectors.getBabies(state).length,
    }),
)(Baby);