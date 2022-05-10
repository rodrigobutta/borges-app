import { UPDATE_SUBSCRIPTION_NAME } from '../constants/actionTypes';
import { SubscriptionActionTypes } from '../actions/actionSubscription';
import { ISubscription } from '../types';

const initialState: ISubscription = {
  name: 'Standard',
  price: 10,
};

export const subscriptionState = (state = initialState, action: SubscriptionActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_SUBSCRIPTION_NAME: {
      return {
        ...state,
        name: payload,
      };
    }
    default:
      return state;
  }
};
