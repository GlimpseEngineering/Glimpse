import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { browserHistory } from 'react-router';
//Redux Thunk middleware allows you to write
//action creators that return a function instead of an action.
import thunk from 'redux-thunk';

// import the root reducer
import rootReducer from '../reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

export default store;


/** */