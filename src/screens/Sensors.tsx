import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Gyroscope, ThreeAxisMeasurement } from 'expo-sensors';
import { Subscription } from 'expo-modules-core';

const LOCATION_TRACKING = 'location-tracking';

interface IProps {
  currentLocation?: string;
  // onUpdateCurrentLocation(location: ICurrentLocation): void;
}

function Sensors({ currentLocation }: IProps) {
  function round(n: any) {
    if (!n) {
      return 0;
    }
    return Math.floor(n * 100) / 100;
  }

  const [data, setData] = useState<ThreeAxisMeasurement>({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [moving, setMoving] = useState<boolean>(false);

  const _slow = () => {
    // Gyroscope.setUpdateInterval(1000);
  };

  const _fast = () => {
    // Gyroscope.setUpdateInterval(16);
  };

  const _subscribe = () => {
    const listener = Gyroscope.addListener(gyroscopeData => {
      Gyroscope.setUpdateInterval(500);
      setData(gyroscopeData);
    });
    setSubscription(listener);
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    const { x, y, z } = data;
    const fact = Math.abs(x) + Math.abs(y) + Math.abs(z);

    setMoving(fact > 1);
  }, [data]);

  const { x, y, z } = data;

  return (
    <View style={styles.container}>
      <Text>{moving ? 'Moving' : 'Not moving'}</Text>

      <Text style={styles.text}>x: {round(x)}</Text>
      <Text style={styles.text}>y: {round(y)}</Text>
      <Text style={styles.text}>z: {round(z)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={subscription ? _unsubscribe : _subscribe} style={styles.button}>
          <Text>{subscription ? 'On' : 'Off'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_slow} style={[styles.button, styles.middleButton]}>
          <Text>Slow</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={_fast} style={styles.button}>
          <Text>Fast</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  text: {
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 15,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    padding: 10,
  },
  middleButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
});

export default Sensors;
