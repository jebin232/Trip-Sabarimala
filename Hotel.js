import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView ,{Callout, Marker,Circle} from 'react-native-maps';
export default function Hotel() {
  return (
    <View style={{flex:1}}>
    <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      GooglePlacesAutocomplete={{
        rankby:"distance"
      }}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key:'AIzaSyCSjARj4oCFq-VDS8NaJbWdb7j3pZrlkSI',
        language: 'en',
        components: 'country:us',
        types:"establishment",
        radius:30000
        // location:`${region.latitude},${region.longitude}`
      }}
      styles={{container:{flex:0,position:"absolute",width:"100%",Index:1
      },
      listView:{backgroundColor:"white"}
      }}
    />
      <MapView style={styles.map} initialRegion={{
      latitude: 9.4321,
      longitude: 77.0820,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}>
      <Marker coordinate={{
       latitude: 9.4321,
      longitude: 77.0820,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Sabarimalai</Text>
            <Image style={styles.image}
            source={require("./assets/adaptive-icon.png")}
            />
            </View>
        </View>
      </Callout>

      </Marker>
<Circle
        center={{latitude: 9.4321,
                longitude: 77.0820}}
       
        radius={1000}
      />
      <Marker coordinate={{
        latitude: 9.2559,
      longitude: 77.0500,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Hotel Arya Bhavan {"\n"}SH 67


            {"\n"}Ranni


            {"\n"}Pathanamthitta, 689662


            {"\n"}Kerala
 {"\n"}no:+91 95441 00655</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.1640,
      longitude: 76.4855,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Amani Arabian  Restaurant {"\n"}GS Road

            {"\n"}Thazhe Vettipuram

            {"\n"}Pathanamthitta, 689645

            {"\n"}Kerala
 {"\n"}no:+91 95624 44830</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.2633,
      longitude: 77.0938,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>KDFC Gavi hotel {"\n"}NH 183A


            {"\n"}Ranni

            {"\n"}Pathanamthitta, 689645

            {"\n"}Kerala
 {"\n"}no:+91 4869-253270</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3106,
      longitude: 77.0514,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Mount haze resort  {"\n"}Periyar National Park


            {"\n"}Peerumade

            {"\n"}Idukki, 685533


            {"\n"}Kerala
 {"\n"}no:+91 751-0488321</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3156,
      longitude: 77.0633,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>L&G Riverveiw Haven {"\n"}NH 183A


            {"\n"}Peerumade

            {"\n"}Idukki, 685533


            {"\n"}Kerala
 {"\n"}no:+91 94477 35577</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3235,
      longitude: 77.3050,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Arnakal tea estate {"\n"}Peerumade


            {"\n"}Idukki, 685538


\
            {"\n"}Kerala
 {"\n"}no:+91 94877 49400</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3258,
      longitude: 77.0204,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Parunthumpara resort{"\n"}Peerumade
            {"\n"}Idukki, 685531
            {"\n"}Kerala
 {"\n"}no:+91 98463 90191</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.2448,
      longitude: 77.0411,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Hotel Thrivani{"\n"}SH 67


            {"\n"}Ranni


            {"\n"}Pathanamthitta, 689645

            {"\n"}Kerala
 {"\n"}no:+91 96568 34341</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.1935,
      longitude: 77.1016,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Hotel Sree Ayyappan {"\n"}SH 67



            {"\n"}Pathanamthitta, 689645

            {"\n"}Kerala
 {"\n"}no:+91 89438 75073</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      
    </MapView>

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  bubble:{
    flexDirection:'row',
    alignSelf:'flex-start',
    backgroundColor:"#fff",
    borderRadius:6,
    borderColor:'#ccc',
    borderWidth:0.5,
    padding:15,

  },
  name:{
    fontSize:16,
    marginBottom:5,
  },
  image:{
    width:120,
    height:80,
  },
});