import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import { configureStore } from '../../store';
import AddBaby from '../AddBaby';
import AddEvent from '../AddEvent';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Redirect from="/" to="/babies"></Redirect>
            <Route path="/events" component={AddEvent}></Route>
            <Route path="/babies" component={AddBaby}></Route>
        </BrowserRouter>
    </Provider>
);

export default App;
