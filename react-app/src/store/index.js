
import { createStore } from 'redux';
import { login } from '../components/reducers/login';

const initialState = {
  login: false
};

export const store = createStore(login, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());