import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView ,{Callout, Marker,Circle} from 'react-native-maps';
export default function Hospital() {
  return (
    <View style={{flex:1}}>
    
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

      <Marker coordinate={{
       latitude: 9.3621,
      longitude: 77.0945,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Kumily Government Hospital. {"\n"}Thekkady,{"\n"}Kumily</Text>
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
       latitude: 9.4511,
      longitude: 77.0649,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Orth One Hosptial {"\n"}Bypass Rd.{"\n"} Kattappana, {"\n"}Kerala</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
       latitude: 9.3207,
      longitude: 76.5431,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>MMT Hospital ,{"\n"}Mundakayam ,{"\n"}Kottayam</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.2520,
      longitude: 77.0408,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Government hospital pampa {"\n"}Swamy Ayyappan Road
            {"\n"}Ranni
            {"\n"}Pathanamthitta, 689645
            {"\n"}Kerala
            {"\n"}no:+91 8381-203318</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3204,
      longitude: 76.5744,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Primary Health
Centre Koruthod {"\n"}Mundakayam Elavungal
            {"\n"}State Highway, Kanjirappally
            {"\n"}Kottayam, 686513
            {"\n"}Kerala
 {"\n"}no:+91 4828-280104</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3319,
      longitude: 76.5530,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Primary Health
Centre Kokkayar {"\n"}Peerumade
            {"\n"}Idukki, 685532
            {"\n"}Kerala
 {"\n"}no:+91 4869-280101</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.1240,
      longitude: 76.4906,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Amma Hospital
V Kottayam {"\n"}Vakayar Vallicodu Road
Konni
{"\n"}Pathanamthitta, 689645
            {"\n"}Kerala
 {"\n"}no:+91 97472 70900</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.1520,
       longitude: 76.4243,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Thumpamon
Government  {"\n"}Thumpamon Pariyaram Road
Adoor
            {"\n"}Pathanamthitta, 689645

            {"\n"}Kerala
 {"\n"}no:+91 4734-266609</Text>
                   </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.2227,
      longitude: 76.4654,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Government Taluk Hospital Ranni {"\n"}Ranni
            {"\n"}Pathanamthitta, 689645
            {"\n"}Kerala
 {"\n"}no:+91 4735-229589</Text>
            
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
       latitude: 9.1819,
      longitude: 76.4654,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Government General Hospital, {"\n"}Pathanamthitta, {"\n"}Kozhenchery, {"\n"}Kerala </Text>
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