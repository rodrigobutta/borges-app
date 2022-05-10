import { connect } from 'react-redux';
import { IStoreState } from '../store/types';
import UserLocation from '../screens/UserLocation';

const mapStateToProps = (state: IStoreState) => ({
  currentLocation: state.currentLocationState,
});

const mapDispatchToProps = {
  // onUpdateCurrentLocation: actionCurrentLocation.updateCurrentLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLocation);
