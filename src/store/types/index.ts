import { ThunkAction } from 'redux-thunk';
import { StoreActionTypes } from '../actions';

export interface IUser {
  name: string;
  age: number;
}

export interface ITracker {
  id: string | null;
  name: string;
}

export interface ICurrentLocation {
  lat: number;
  lng: number;
  date: Date | null;
}

export enum INetworkStateType {
  NONE = 'NONE',
  UNKNOWN = 'UNKNOWN',
  CELLULAR = 'CELLULAR',
  WIFI = 'WIFI',
  BLUETOOTH = 'BLUETOOTH',
  ETHERNET = 'ETHERNET',
  WIMAX = 'WIMAX',
  VPN = 'VPN',
  OTHER = 'OTHER',
}

export type INetworkState = {
  type?: INetworkStateType;
  isConnected?: boolean;
  isInternetReachable?: boolean;
};

// =================
// STORE STATE
// =================

export interface IUSerState {
  user: IUser;
  randomUser: any;
}

export interface IStoreState {
  userState: IUSerState;
  trackerState: ITracker;
  currentLocationState: ICurrentLocation;
  networkStatusState: INetworkState;
}

export type IStoreStateTypes = IUSerState & ITracker & ICurrentLocation;

// =================
// ACTIONS
// =================
export interface IUpdateUserName {
  type: string;
  payload: string;
}

export interface IUpdateRandomUser {
  type: string;
  payload: any;
}

export interface IUpdateTrackerId {
  type: string;
  payload: string;
}

export interface IUpdateCurrentLocation {
  type: string;
  payload: ICurrentLocation;
}

export interface IUpdateNetworkStatus {
  type: string;
  payload: INetworkState;
}

// =================
// THUNKS
// =================
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, IStoreState, null, StoreActionTypes>;
