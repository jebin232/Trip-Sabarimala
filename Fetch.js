import React,{useState,useEffect} from 'react';
import { Text, View ,FlatList, StyleSheet,Pressable,Linking,TouchableOpacity} from 'react-native';
import { firebase } from './config';
const Fetch = () => {
    const [users,setUsers]=useState([]);
    const todoRef=firebase.firestore().collection('todos');
    const feed = () => {
        const url="https://www.makemytrip.com/bus-tickets/sabarimala-city-online-booking.html";
        Linking.openURL(url);
    };

    useEffect(async()=>{
        todoRef
        .onSnapshot(
            quarySnapshot=>{
                const users=[]
                quarySnapshot.forEach((doc)=>{
                    const{heading,text}=doc.data()
                    users.push({
                        id:doc.id,
                        heading,
                        text,
                    })
                })
                setUsers(users)
            }
        )
    },[])
  return (
    <View
      style={{flex: 1,        backgroundColor:'#F3C78A'
}}>
      <TouchableOpacity onPress={feed} style={{borderRadius:20,
      padding:20,
      marginVertical:20,
      backgroundColor:'#00bfff'}}>

    <Text style={{textAlign: 'center',color:'#ffff',
fontSize:20,
fontwidth:'600',
marginBottom:20}}>Check Here for Details</Text>
    </TouchableOpacity>
    <FlatList style={{height:'100%'}}
                data={users}
                numColumns={1}
                renderItem={({item})=>(
                    <Pressable
                    style={styles.container}>
                        <View style={styles.innerContainer}>
                            <Text style={styles.ItemHeader}>
                                {item.heading}
                            </Text>
                            <Text style={styles.Itemtext}>
                                {item.text}
                            </Text>
                        </View>
                    </Pressable>
    )}

    />   
</View>
  )
}
export default Fetch;
const styles=StyleSheet.create({

    container:{
        backgroundColor:'#e5e5e5',
        padding:15,
        borderRadius:15,
        margin:5,
        marginHorizontal:10,

    },
    innerContainer:{
        alignItem:'center',
        flexDirection:'column',

    },
    ItemHeader:{
        fontWeight:'bold'
    },
    Itemtext:{

        fontWeight:'300'

    }
})