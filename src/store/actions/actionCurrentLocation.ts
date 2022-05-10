import { UPDATE_CURRENT_LOCATION } from '../constants/actionTypes';
import { ICurrentLocation, IUpdateCurrentLocation } from '../types';

const currentLocationAction = {
  updateCurrentLocation(location: ICurrentLocation): IUpdateCurrentLocation {
    return {
      type: UPDATE_CURRENT_LOCATION,
      payload: location,
    };
  },
};

export default currentLocationAction;
export type CurrentLocationActionTypes = IUpdateCurrentLocation;
