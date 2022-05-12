import { connect } from 'react-redux';
import Home from '../screens/Home';
import { actionUser, actionTracker, actionCurrentLocation } from '../store/actions';
import { IStoreState } from '../store/types';
import { thunkUser } from '../store/middlewares/thunks';

const mapStateToProps = (state: IStoreState) => ({
  user: state.userState.user,
  randomUser: state.userState.randomUser,
  tracker: state.trackerState,
  currentLocation: state.currentLocationState,
});

const mapDispatchToProps = {
  onGetRandomUser: thunkUser.getRandomUser,
  onUpdateUserName: actionUser.updateUserName,
  onUpdateTrackerId: actionTracker.updateTrackerId,
  onUpdateCurrentLocation: actionCurrentLocation.updateCurrentLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
