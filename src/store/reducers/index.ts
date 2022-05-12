import { userState } from './reducerUser';
import { trackerState } from './reducerTracker';
import { currentLocationState } from './reducerCurrentLocation';
import { combineReducers } from 'redux';
import { IStoreState } from '../types';

const rootReducer = combineReducers<IStoreState>({
  userState,
  trackerState,
  currentLocationState,
});

export default rootReducer;
