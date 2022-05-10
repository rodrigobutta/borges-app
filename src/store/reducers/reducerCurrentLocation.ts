import { UPDATE_CURRENT_LOCATION, UPDATE_SUBSCRIPTION_NAME } from '../constants/actionTypes';
import { CurrentLocationActionTypes } from '../actions/actionCurrentLocation';
import { ICurrentLocation } from '../types';

const initialState: ICurrentLocation = {
  lat: 0,
  lng: 0,
  date: null,
};

export const currentLocationState = (state = initialState, action: CurrentLocationActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_CURRENT_LOCATION: {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
};
