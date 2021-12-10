// this file creates the global state for the app
import { createStore } from 'redux';
import reducers from './reducers';



export default createStore(reducers);