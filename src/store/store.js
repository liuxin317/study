import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import Reducer from '../reducer/reducer';

const store = createStore(combineReducers({
    Reducer
  }), applyMiddleware(thunk))

export default store;
