import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default function exposcreen() {
  return (
    <WebView
      style={styles.container}
      source={{ uri: 'https://www.onlinetdb.com/store.htm' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
