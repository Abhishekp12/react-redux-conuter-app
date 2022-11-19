import {createStore} from'redux';
import rootReducer from '../reducer/rootReducerr';

const store = createStore(rootReducer);

export default store;
