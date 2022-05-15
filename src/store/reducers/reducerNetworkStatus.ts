import { UPDATE_NETWORK_STATUS } from '../constants/actionTypes';
import { NetworkStatusActionTypes } from '../actions/actionNetworkStatus';
import { INetworkState } from '../types';

const initialState: INetworkState = {};

export const networkStatusState = (state = initialState, action: NetworkStatusActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_NETWORK_STATUS: {
      return {
        ...state,
        ...payload,
      };
    }
    default:
      return state;
  }
};
