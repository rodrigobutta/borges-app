import { UPDATE_USER_NAME, UPDATE_RANDOM_USER } from '../constants/actionTypes';
import { IUpdateUserName, IUpdateRandomUser } from '../types';

const userAction = {
  updateUserName(name: string): IUpdateUserName {
    return {
      type: UPDATE_USER_NAME,
      payload: name,
    };
  },
  updateRandomUser(user: any): IUpdateRandomUser {
    return {
      type: UPDATE_RANDOM_USER,
      payload: user,
    };
  },
};

export default userAction;
export type UserActionTypes = IUpdateUserName | IUpdateRandomUser;
