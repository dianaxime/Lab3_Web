/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';*/

import { createStore } from 'redux';

import reducer from './reducers';


/*const configureStore = () => {
  return createStore(reducer);
}*/

const store = createStore(reducer);

store.dispatch({
    type: 'EVENT_ADDED',
    payload: {
        id: 1,
        date: new Date(),
        babyId: 5,
        notes: "Hola"
    }
});
store.dispatch({
    type: 'EVENT_ADDED',
    payload: {
        id: 2,
        date: new Date(),
        babyId: 5,
        notes: "que hace",
        events: 1,
    }
});

store.dispatch({
    type: 'EVENT_ADDED',
    payload: {
        id: 3,
        date: new Date(),
        babyId: 4,
        notes: "banana"
    }
});

console.log(store.getState());

store.dispatch({
    type: 'EVENT_DELETED',
    payload: {id: 1, events:[1,2], babyId: 5,},
});

console.log(store.getState());

/*

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/
