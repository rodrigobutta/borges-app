import { connect } from 'react-redux';
import Home from '../screens/Home';
import { actionUser, actionSubscription, actionCurrentLocation } from '../store/actions';
import { IStoreState } from '../store/types';
import { thunkUser } from '../store/middlewares/thunks';

const mapStateToProps = (state: IStoreState) => ({
  user: state.userState.user,
  randomUser: state.userState.randomUser,
  subscription: state.subscriptionState,
  currentLocation: state.currentLocationState,
});

const mapDispatchToProps = {
  onGetRandomUser: thunkUser.getRandomUser,
  onUpdateUserName: actionUser.updateUserName,
  onUpdateSubscriptionName: actionSubscription.updateSubscriptionName,
  onUpdateCurrentLocation: actionCurrentLocation.updateCurrentLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
