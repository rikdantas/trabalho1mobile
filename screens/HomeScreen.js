import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View,} from 'react-native';
import Constants from 'expo-constants';

import Emails from '../components/Emails';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />   
      <Emails navigation = {navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: Constants.statusBarHeight,
  },
});
