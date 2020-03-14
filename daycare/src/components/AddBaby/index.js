import React from 'react';
import BabyForm from './addBaby';
import {BrowserRouter, Router, Link} from 'react-router-dom';


const Baby = () => (
    <div className="form">
        <label className="babiesLabel">{'Babies'}</label>
        <div className="space">
            <BabyForm />
        </div>      
    </div>
  );

export default Baby;