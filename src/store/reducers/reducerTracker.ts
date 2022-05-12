import { UPDATE_TRACKER_ID } from '../constants/actionTypes';
import { TrackerActionTypes } from '../actions/actionTracker';
import { ITracker } from '../types';

const initialState: ITracker = {
  id: null,
  name: '',
};

export const trackerState = (state = initialState, action: TrackerActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_TRACKER_ID: {
      return {
        ...state,
        id: payload,
      };
    }
    default:
      return state;
  }
};
