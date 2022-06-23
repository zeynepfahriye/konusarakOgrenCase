import React ,{useState,useEffect}from "react";
import { SafeAreaView, View, Text,StyleSheet, ScrollView, TouchableOpacity } from "react-native";
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
        <SafeAreaView style={{flex:1}}>
        <ScrollView>
        <View>
            {
               data.characters && data.characters.map((item, key) =>
                <DetailCard key={key} detail={item}></DetailCard>
                )
            }
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    }
  });