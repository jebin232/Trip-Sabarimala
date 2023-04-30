import React,{useState,useEffect} from 'react';
import {ImageBackground, Text, View ,FlatList,Linking, StyleSheet,Pressable,TouchableOpacity} from 'react-native';
import { firebase } from './config';
const Fetch = () => {
    const [users,setUsers]=useState([]);
    const todoRef=firebase.firestore().collection('news');
    const feed = () => {
        const url="https://sabarimala.kerala.gov.in/";
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
      <Text style={styles.te} >Here you can see the Weather news</Text>
      <TouchableOpacity onPress={feed} style={{borderRadius:20,
      padding:20,
      marginVertical:20,
      height:200
      }}>
<ImageBackground style={{borderRadius:15,height:200,}} source={require('./assets/Untitled design (7).png')}>
    <Text style={{textAlign: 'center',color:'#fff',
fontSize:20,
fontwidth:'600',
marginBottom:20}}>{"\n"}{"\n"}{"\n"}Sabarimala {"\n"}Live updates</Text>
</ImageBackground>
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
                            <Text style={styles.Itemtext} >
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
        fontWeight:'bold',
        textAlign: 'center'
    },
    Itemtext:{

        fontWeight:'300',
        textAlign: 'center',


    },
    te:{
        fontWeight:'bold',
        justifyContent:'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 22,
        
    }
})