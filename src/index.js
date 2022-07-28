import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore , applyMiddleware } from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducer';


// const logger  = function({dispatch , getState}){
//   return function(next){
//     return function(action){
//       console.log('ACTION_TYPE = ' , action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch , getState}) => (next) => (action) =>{

  console.log('ACTION_TYPE = ' , action.type);
  next(action);
}

const store = createStore(rootReducer , applyMiddleware(logger));
console.log('store', store);
// console.log('state' , store.getState())

// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies: [{name: 'Superman'}]
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store = {store}/>
  </React.StrictMode>
);
