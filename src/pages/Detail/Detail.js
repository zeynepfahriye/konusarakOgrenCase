import React ,{useState,useEffect}from "react";
import { SafeAreaView, View, Text,StyleSheet, ScrollView } from "react-native";
import axios from 'axios'
import DetailCard from "../../components/Card/DetailCard";

export default function Detail({route, navigation}){
const params = route.params;
const [data, setData] = useState();

useEffect(() => {
    const dataGetter = async () => {
        const response = await axios.get(params.url); // Data
        if(response.data !== undefined) {
            console.log(response.data)
            setData(response.data) // Data 
        }
    }; 
    dataGetter();
}, []);

if(!data) return null
    return (
        <SafeAreaView>
        <ScrollView>
         <View style={{backgroundColor:'#8A2BE2'}}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.episode}>{data.episode}</Text>
            <Text style={styles.air_date}>{data.air_date}</Text>
         </View>
            {
                
               data.characters && data.characters.map((item, key) =>
                <DetailCard key={key} detail={item}></DetailCard>
                )
            }
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    name:{
        fontWeight:'bold',
        fontSize:25,
        color:'white',
        marginLeft:5
    },
    episode:{
        color:'white',
        flexDirection:'row',
        fontSize:15,
        marginLeft:5
    },
    air_date:{
        alignSelf:'flex-start',
        flexDirection:'row',
        fontStyle:'italic',
        color:'white',
        marginLeft:5,
        opacity:0.5
    }
  });