import { userState } from './reducerUser';
import { trackerState } from './reducerTracker';
import { currentLocationState } from './reducerCurrentLocation';
import { combineReducers } from 'redux';
import { IStoreState } from '../types';
import { networkStatusState } from './reducerNetworkStatus';

const rootReducer = combineReducers<IStoreState>({
  userState,
  trackerState,
  currentLocationState,
  networkStatusState,
});

export default rootReducer;
