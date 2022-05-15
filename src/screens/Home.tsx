import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from 'react-navigation';
import { IUser, ITracker, ICurrentLocation, INetworkState } from '../store/types';
import * as SecureStore from 'expo-secure-store';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import * as Device from 'expo-device';
import * as Network from 'expo-network';
import env from '../env';

interface IProps {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  user: IUser;
  randomUser: any;
  tracker: ITracker;
  currentLocation: ICurrentLocation;
  networkStatus: INetworkState;
  onUpdateUserName(name: string): void;
  onUpdateTrackerId(id: string): void;
  onUpdateCurrentLocation(location: ICurrentLocation): void;
  onUpdateNetworkStatus(networkStatus: INetworkState): void;
  onGetRandomUser(): void;
}

// export default class Home extends Component<IProps> {
function Home({
  navigation,
  user,
  randomUser,
  tracker,
  currentLocation,
  networkStatus,
  onUpdateUserName,
  onUpdateTrackerId,
  onUpdateCurrentLocation,
  onUpdateNetworkStatus,
  onGetRandomUser,
}: IProps) {
  const randomString = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  useEffect(() => {
    let isMounted = true;
    const fetch = async () => {
      let fetchTrackerId = await SecureStore.getItemAsync('secure_trackerId');
      if (!fetchTrackerId) {
        fetchTrackerId = uuidv4();
        await SecureStore.setItemAsync('secure_trackerId', fetchTrackerId);
      }
      onUpdateTrackerId(fetchTrackerId);
      console.log(fetchTrackerId);
    };
    fetch();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    console.log(Device.brand, Device.modelName, Device.deviceYearClass);
  }, [Device]);

  useEffect(() => {
    let isMounted = true;
    const fetch = async () => {
      const network = await Network.getNetworkStateAsync();
      onUpdateNetworkStatus(network as unknown as INetworkState); // TODO grab
      console.log('NETWORK', network);
    };
    fetch();

    return () => {
      isMounted = false;
    };
  }, [Network]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={env.color} barStyle={'dark-content'} />
      <View style={styles.userInfo}>
        <View>
          <Text>USER {user.name}</Text>
        </View>
        {tracker && (
          <View>
            <Text>TRACKER ID {tracker.id}</Text>
          </View>
        )}
        {networkStatus && (
          <View>
            <Text>NET {networkStatus.isInternetReachable ? 'YES' : 'NO'}</Text>
          </View>
        )}
        <View>
          <Text>
            LOCATION {currentLocation.lat} {currentLocation.lng}
          </Text>
        </View>
      </View>
      <View style={styles.randomUser}>
        <Text>{JSON.stringify(randomUser)}</Text>
      </View>
      <Button title='UserLocation' onPress={() => navigation.navigate('UserLocation')} />
      <Button title='Sensors' onPress={() => navigation.navigate('Sensors')} />
      <Button title='Sensor Accelerometer' onPress={() => navigation.navigate('SensorAccelerometer')} />
      <Button title='Go to Foo' onPress={() => navigation.navigate('Foo')} />
      <Button title='Go to Bar' onPress={() => navigation.navigate('Bar')} />
      <Button title='Go to Baz' onPress={() => navigation.navigate('Baz')} />
      <Button title='Update user name' onPress={() => onUpdateUserName(`username-${randomString(5)}`)} />
      <Button title='Update current location' onPress={() => onUpdateCurrentLocation({ lat: 1, lng: 1, date: null })} />
      <Button title='Get random user' onPress={() => onGetRandomUser()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userInfo: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  randomUser: {
    paddingHorizontal: 30,
  },
});

export default Home;
