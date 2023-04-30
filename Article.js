import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView ,{Callout, Marker} from 'react-native-maps';
import Fetchnew from './Fetchnew';

export default function Article() {
  return (
      <View
        style={{
          flex: 1,}}>
          <Fetchnew/>
      </View>
    )
  }