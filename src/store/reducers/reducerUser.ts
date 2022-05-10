import { UPDATE_USER_NAME, UPDATE_RANDOM_USER } from '../constants/actionTypes';
import { UserActionTypes } from '../actions/actionUser';
import { IUSerState } from '../types';

const initialState: IUSerState = {
  user: {
    name: 'My name',
    age: 24,
  },
  randomUser: {},
};

export const userState = (state = initialState, action: UserActionTypes) => {
  const { type, payload } = action;

  switch (type) {
    case UPDATE_USER_NAME: {
      const user = { ...state.user };

      user.name = payload;
      return {
        ...state,
        user,
      };
    }
    case UPDATE_RANDOM_USER: {
      return {
        ...state,
        randomUser: { ...payload },
      };
    }
    default:
      return state;
  }
};
