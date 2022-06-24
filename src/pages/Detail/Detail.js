import React ,{useState,useEffect}from "react";
import { SafeAreaView, View, Text,StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import axios from 'axios'
import DetailCard from "../../components/Card/DetailCard";
import Loading from "../../components/Loading/Loading";

export default function Detail({route, navigation}){
const params = route.params;
const [data, setData] = useState();
const [loading, setLoading] = useState(true);


useEffect(() => {
    const dataGetter = async () => {
        const response = await axios.get(params.url); // Data
        if(response.data !== undefined) {
            setData(response.data) // Data 
            setLoading(false);
        }
    }; 
    dataGetter();
}, []);



if(loading) return <Loading />
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