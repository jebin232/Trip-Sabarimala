import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './Feed';
import Article from './Article';
import Bus from './Bus';
import exposcreen from './exposcreen';
import Train from './Train';
import Hospital from './Hospital';
import Hotel from './Hotel';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StyleSheet,Alert, Text, View,ScrollView,Image } from 'react-native';
import React,{useEffect} from 'react';
import hom from './hom';



const Drawer = createDrawerNavigator();

function App() {
  // const requestUserPermission=async()=>{
  //   const authStatus = await messaging().requestPermission();
  //   const enabled =
  //     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //   if (enabled) {
  //     Alert.alert('Authorization status:', authStatus);

  //   };
  //   };
  // useEffect(()=>{
  //   if(requestUserPermission()){
  //     messaging().getToken().then(token=>{
  //       // console.log(token);
  //       Alert.alert(token);

  //     });
  //   }
  //   else{
  //     Alert.alert("Failed token status",authStatus);

  //   }
  //   messaging()
  //   .getInitialNotification()
  //   .then(async(remoteMessage) => {
  //     if (remoteMessage) {
  //       Alert.alert('Notification caused app to open from quit state:',
  //       remoteMessage.notification);

        
  //     }
  //    });

  //   messaging().onNotificationOpenedApp(async(remoteMessage) => {
  //     console.log(
  //       'Notification caused app to open from background state:',
  //       remoteMessage.notification,
  //     );
  //   });

  //   messaging().setBackgroundMessageHandler(async (remoteMessage) => {
  //     console.log('Message handled in the background!', remoteMessage);
  //   });

  //   const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      
  //     Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  //   });

  //   return unsubscribe;
  // },[])

  return (
    <NavigationContainer style={{backgroundColor:'#F1B868'}}>

    <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={hom}  />
      <Drawer.Screen name="Live news" component={Article}  />
      <Drawer.Screen name="Train" component={Bus} />
      <Drawer.Screen name="Bus" component={Feed} />
      <Drawer.Screen name="Hotels" component={Hotel} />
      <Drawer.Screen name="Hospitals" component={Hospital} />
      <Drawer.Screen name="Restaurant" component={Train} />
      <Drawer.Screen name="pooja" component={exposcreen} />
     
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;