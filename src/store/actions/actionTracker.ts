import { UPDATE_TRACKER_ID } from '../constants/actionTypes';
import { IUpdateTrackerId } from '../types';

const trackerAction = {
  updateTrackerId(id: string): IUpdateTrackerId {
    return {
      type: UPDATE_TRACKER_ID,
      payload: id,
    };
  },
};

export default trackerAction;
export type TrackerActionTypes = IUpdateTrackerId;
