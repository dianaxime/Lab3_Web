import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch, Redirect } from 'react-router';
import { syncHistoryWithStore} from 'react-router-redux'

import { createBrowserHistory } from 'history';
import AddBaby from '../AddBaby';
import AddEvent from '../AddEvent';
import { configureStore } from '../../store';

const store = configureStore();

const Browserhistory = createBrowserHistory();

const history = syncHistoryWithStore(Browserhistory, store);

const App = () => (
    <Provider store={store}>
        <Router history={history}>
            <Redirect from="/" to="/babies"></Redirect>
            <div>
                <Switch>
                    <Route path="/events">
                        <AddEvent/>
                    </Route>
                    <Route path="/babies">
                        <AddBaby/>
                    </Route>
                </Switch>
            </div>
        </Router>
    </Provider>
);

export default App;
