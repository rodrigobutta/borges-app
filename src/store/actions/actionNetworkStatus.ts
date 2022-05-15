import { UPDATE_NETWORK_STATUS } from '../constants/actionTypes';
import { INetworkState, IUpdateNetworkStatus } from '../types';

const networkStatusAction = {
  updateNetworkStatus(status: INetworkState): IUpdateNetworkStatus {
    return {
      type: UPDATE_NETWORK_STATUS,
      payload: status,
    };
  },
};

export default networkStatusAction;
export type NetworkStatusActionTypes = IUpdateNetworkStatus;
