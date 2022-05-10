import { userState } from './reducerUser';
import { subscriptionState } from './reducerSubscription';
import { currentLocationState } from './reducerCurrentLocation';
import { combineReducers } from 'redux';
import { IStoreState } from '../types';

const rootReducer = combineReducers<IStoreState>({
  userState,
  subscriptionState,
  currentLocationState,
});

export default rootReducer;
