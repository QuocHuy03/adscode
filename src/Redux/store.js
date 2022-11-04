import { createStore } from 'redux';
import rootReducer from './Reducer';


// Create store
const store = createStore(rootReducer);
export default store;