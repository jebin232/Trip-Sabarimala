import React from 'react';
import { Text, View ,Image,StyleSheet,TouchableOpacity,Linking} from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';

const hom = ({navigation}) => {
      const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`

    const pooj = () => {
        const url="https://www.onlinetdb.com/store.htm";
        Linking.openURL(url);
    };
    const SabarimalaTempleCalendar    = () => {
        const url="http://travancoredevaswomboard.org/opening-and-closing-days-of-sabarimala-temple-in-2013-14/";
        Linking.openURL(url);
    };
    const poojatiming = () => {
        const url="https://sabarimala.kerala.gov.in/pooja-timing";
        Linking.openURL(url);
    };
    const VirtulQbooking = () => {
        const url="https://sabarimalaonline.org/#/login";
        Linking.openURL(url);
    };
    const howtoreach = () => {
        const url="https://sabarimala.kerala.gov.in/howtoreach";
        Linking.openURL(url);
    };
    const helpline = () => {
        const url="https://sabarimala.kerala.gov.in/ta/helpline";
        Linking.openURL(url);
    };
    const nearplaces = () => {
        const url="https://www.nativeplanet.com/sabarimala/places-near/#adoor";
        Linking.openURL(url);
    };
    const livenews = () => {
        const url="https://timesofindia.indiatimes.com/topic/sabarimala";
        Linking.openURL(url);
    };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor:'#F3C78A'
      }}>
<View style={styles.alternativeLayoutButtonContainer}>
<TouchableOpacity onPress={() => navigation.navigate('pooja')} >
    <Image style={styles.imagestyle} resizeMode="contain" source={require('./assets/sabarimala-covid1.png')} />
    <Text style={{textAlign:'center'}}>Pooja Booking {'\n'}பூஜை முன்பதிவு</Text>
</TouchableOpacity>
<TouchableOpacity onPress={SabarimalaTempleCalendar}>
    <Image style={styles.imagestyle}  source={require('./assets/images (2).png')} />
    <Text style={{textAlign:'center'}}>Temple Calender {'\n'}கோவில் நாட்காட்டி
</Text>

</TouchableOpacity >
          
        </View>    
        <View style={styles.alternativeLayoutButtonContainer}>
<TouchableOpacity onPress={poojatiming}>
    <Image style={styles.imagestyle} resizeMode="contain" source={require('./assets/images.png')} />
    <Text style={{textAlign:'center'}}>Pooja Timing {'\n'}பூஜை டைமிங்
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={VirtulQbooking}>
    <Image style={styles.imagestyle}  source={require('./assets/download-27-898672-1602079116.png')} />
    <Text style={{textAlign:'center'}}>Virtul Q Booking {'\n'}வரிசை முன்பதிவு
</Text>

</TouchableOpacity>
          
        </View>    
        <View style={styles.alternativeLayoutButtonContainer}>
<TouchableOpacity onPress={howtoreach}>
    <Image style={styles.imagestyle} resizeMode="contain" source={require('./assets/download-9-931926-1609001288.png')} />
    <Text style={{textAlign:'center'}}>How to Reach {'\n'}எப்படி அடைவது
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={helpline}>
    <Image style={styles.imagestyle}  source={require('./assets/unidentified-pilgrims-walk-forest-to-sabarimala-temple-october-kerala-india-sabarimala-pilgrim-centre-173109571.png')} />
    <Text style={{textAlign:'center'}}>Helpline To All {'\n'} உதவி   மையம்</Text>

</TouchableOpacity>
          
        </View>    
        <View style={styles.alternativeLayoutButtonContainer}>
<TouchableOpacity onPress={nearplaces}>
    <Image style={styles.imagestyle} resizeMode="contain" source={require('./assets/sabarimala-temple_650x400_81448289422.png')} />
    <Text style={{textAlign:'center'}}>Near Places {'\n'}இடங்களுக்கு அருகில்
</Text>
</TouchableOpacity>
<TouchableOpacity onPress={livenews}>
    <Image style={styles.imagestyle}  source={require('./assets/download (1).png')} />
    <Text style={{textAlign:'center'}}>Live News {'\n'}நேரடி செய்திகள்
</Text>

</TouchableOpacity>
          
        </View> 
        </View>
  )
}
const styles = StyleSheet.create({
  
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imagestyle:{
    borderRadius: 20,

    width:90,
    height:90
  }
});

export default hom;