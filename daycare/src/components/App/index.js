import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';

import { configureStore } from '../../store';
import AddBaby from '../AddBaby';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <AddBaby/>
    </Provider>
);

export default App;
