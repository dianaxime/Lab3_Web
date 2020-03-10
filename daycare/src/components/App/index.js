import React from 'react';
import { Provider } from 'react-redux';

import { configureStore } from '../../store';
import AddBaby from '../AddBaby';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <AddBaby/>
    </Provider>
);

export default App;
