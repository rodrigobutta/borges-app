import { connect } from 'react-redux';
import Home from '../screens/Home';
import { actionUser, actionTracker, actionCurrentLocation, actionNetworkStatus } from '../store/actions';
import { IStoreState } from '../store/types';
import { thunkUser } from '../store/middlewares/thunks';

const mapStateToProps = (state: IStoreState) => ({
  user: state.userState.user,
  randomUser: state.userState.randomUser,
  tracker: state.trackerState,
  currentLocation: state.currentLocationState,
  networkStatus: state.networkStatusState,
});

const mapDispatchToProps = {
  onGetRandomUser: thunkUser.getRandomUser,
  onUpdateUserName: actionUser.updateUserName,
  onUpdateTrackerId: actionTracker.updateTrackerId,
  onUpdateCurrentLocation: actionCurrentLocation.updateCurrentLocation,
  onUpdateNetworkStatus: actionNetworkStatus.updateNetworkStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
