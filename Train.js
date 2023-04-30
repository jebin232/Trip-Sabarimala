import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView,Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView ,{Callout, Marker,Circle} from 'react-native-maps';

export default function Train() {
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
      <Circle
        center={{latitude: 9.4321,
                longitude: 77.0820}}
       
        radius={1000}
      />

      <Marker coordinate={{
        latitude: 9.2754,
      longitude: 76.5803,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Vanarani toddy shop {"\n"}Mundakayam Elavungal
            {"\n"}State Highway
            {"\n"}Kanjirappally
            {"\n"}Kottayam, 686513
            {"\n"}Kerala
            {"\n"}India
            {"\n"}no:+91 94470 71365</Text>

            </View>
        </View>
      </Callout>

      </Marker>


      <Marker coordinate={{
        latitude: 9.3440,
      longitude: 77.0122,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>My guest restaurant {"\n"}NH 183
            {"\n"}Peerumade
            {"\n"}Idukki, 685531
            {"\n"}Kerala
            {"\n"}India
            {"\n"}no:+91 90202 55869</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.4548,
      longitude: 77.0641,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Yin yang pizza {"\n"}Idukki
            {"\n"}Idukki, 685511
            {"\n"}Kerala
            {"\n"}India {"\n"}no:+91 99948 65774</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>


      <Marker coordinate={{
        latitude: 9.3855,
      longitude: 76.5641,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Palozhukumpara Restaurant {"\n"}Peerumade
            {"\n"}Idukki, 685501
            {"\n"}Kerala
            {"\n"}India {"\n"}no:+91 90720 92080</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3511,
      longitude: 76.5812,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Rice bowl Restaurant {"\n"}MBC  Kuttikanam Road
            {"\n"}Peerumade
            {"\n"}Idukki, 685531
            {"\n"}Kerala {"\n"}no:+91 94973 71907</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3633,
      longitude: 77.1012,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Ebony  Restaurant {"\n"}Thekkady Lake Road

            {"\n"}Peerumade

            {"\n"}Kumily, 685536

            {"\n"}Kerala {"\n"}no:+91 98955 40702</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3625,
      longitude: 77.1018,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Spice garden  Restaurant {"\n"}Thekkady  Road

            {"\n"}Peerumade

            {"\n"}Kumily, 685536

            {"\n"}Kerala {"\n"}no:+91 99954 64884</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3611,
      longitude: 77.1008,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Bamboo cafe Restaurant {"\n"}Thekkady  Road

            {"\n"}Peerumade
            {"\n"}Kumily, 685536

            {"\n"}Kerala
 {"\n"}no:+91 98470 17745</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.3615,
      longitude: 77.1022,
      }}
      pinColor="black">
      <Callout>
      <View>
            <View style={styles.bubble}>
            <Text style={styles.name}>Coffe Garden  Restaurant {"\n"}Thekkady  Road

            {"\n"}Peerumade

            {"\n"}Kumily, 685536

            {"\n"}Kerala {"\n"}no:+91 98955 38205</Text>
            
            </View>
        </View>
      </Callout>

      </Marker>

      <Marker coordinate={{
        latitude: 9.1557,
      longitude: 76.4707,
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