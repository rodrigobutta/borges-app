import React, { useEffect, useState, Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import * as TaskManager from 'expo-task-manager';
import axios from 'axios';
import { ICurrentLocation } from '../store/types';
import { store } from '../store';
import { actionCurrentLocation } from '../store/actions';

const LOCATION_TRACKING = 'location-tracking';

let mess = '';
let lat = '';
let lng = '';

interface IProps {
  currentLocation: ICurrentLocation;
  // onUpdateCurrentLocation(location: ICurrentLocation): void;
}

function UserLocation({
  currentLocation,
}: // onUpdateCurrentLocation
IProps) {
  const [locationStarted, setLocationStarted] = useState(false);

  const startLocationTracking = async () => {
    await Location.startLocationUpdatesAsync(LOCATION_TRACKING, {
      accuracy: Location.Accuracy.Highest,
      timeInterval: 7000,
      distanceInterval: 1, // minimum change (in meters) betweens updates
      deferredUpdatesInterval: 1000, // minimum interval (in milliseconds) between updates
      // foregroundService is how you get the task to be updated as often as would be if the app was open
      foregroundService: {
        notificationTitle: 'Using your location',
        notificationBody: 'To turn off, go back to the app and switch something off.',
      },
    });
    const hasStarted = await Location.hasStartedLocationUpdatesAsync(LOCATION_TRACKING);
    setLocationStarted(hasStarted);
    console.log('tracking started?', hasStarted);
  };

  useEffect(() => {
    const config = async () => {
      const locForegroundPermission = await Location.requestForegroundPermissionsAsync();
      const locBackgroundPermission = await Location.requestBackgroundPermissionsAsync();
      if (locForegroundPermission.status != 'granted' && locBackgroundPermission.status !== 'granted') {
        console.log('Permission to access location was denied');
      } else {
        console.log('Permission to access location granted');
        // updateCurrentLocation({ lat: 2, lng: 2, date: null });
      }
    };

    config();
  }, [lat, lng]);

  const handleStartLocation = () => {
    startLocationTracking();
  };

  const handleStopLocation = () => {
    setLocationStarted(false);
    TaskManager.isTaskRegisteredAsync(LOCATION_TRACKING).then(tracking => {
      if (tracking) {
        Location.stopLocationUpdatesAsync(LOCATION_TRACKING);
      }
    });
  };

  return (
    <View>
      <Text>
        LOCATION {currentLocation.lat} {currentLocation.lng}
      </Text>
      <Text>Mess: {mess}</Text>
      <Text>
        Loc: {lat} {lng}
      </Text>
      {locationStarted ? (
        <TouchableOpacity onPress={handleStopLocation}>
          <Text style={styles.btnText}>Stop Tracking</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={handleStartLocation}>
          <Text style={styles.btnText}>Start Tracking</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  btnText: {
    fontSize: 20,
    backgroundColor: 'green',
    color: 'white',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

TaskManager.defineTask(LOCATION_TRACKING, async ({ data, error }) => {
  console.log('TaskManager.defineTask', LOCATION_TRACKING);

  if (error) {
    console.log('LOCATION_TRACKING task ERROR:', error);
    (mess = 'LOCATION_TRACKING task ERROR'), error.message;
    return;
  }
  if (data) {
    const { locations } = data as unknown as any;
    const latitude = locations[0].coords.latitude;
    const longitude = locations[0].coords.longitude;

    lat = latitude;
    lng = longitude;

    console.log(`${new Date(Date.now()).toLocaleString()}: ${latitude},${longitude}`);

    store.dispatch(actionCurrentLocation.updateCurrentLocation({ lat: latitude, lng: longitude, date: null }));

    try {
      const url = `http://192.168.0.204:3090/tracker/c8ef2f93-42fe-4ca5-95f0-288cb5ebf738/track`;
      await axios.post(url, { lat, lng });
    } catch (err) {
      console.error(err);
    }
  }
});

export default UserLocation;
