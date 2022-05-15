import actionUser, { UserActionTypes } from './actionUser';
import actionTracker, { TrackerActionTypes } from './actionTracker';
import actionCurrentLocation, { CurrentLocationActionTypes } from './actionCurrentLocation';
import actionNetworkStatus, { NetworkStatusActionTypes } from './actionNetworkStatus';

export { actionUser, actionTracker, actionCurrentLocation, actionNetworkStatus };
export type StoreActionTypes = UserActionTypes &
  TrackerActionTypes &
  CurrentLocationActionTypes &
  NetworkStatusActionTypes;
