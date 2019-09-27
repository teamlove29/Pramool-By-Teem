import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import { AUTHENTICATED } from './actions/type'
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));
const user = localStorage.getItem('user');
if(user) {
    store.dispatch({ type: AUTHENTICATED });
  }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

