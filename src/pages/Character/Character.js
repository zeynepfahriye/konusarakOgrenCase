import React ,{useState,useEffect}from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import Config from "react-native-config";
import axios from 'axios'
import CharacterCard from "../../components/Card/CharacterCard";


const LineDivider = () => {
    return (
      <View style={{width:1, paddingVertical:10,marginHorizontal:25}}>
        <View
          style={{
          borderColor:'#8A2BE2',
          borderLeftWidth:1,
          flex:1  
          }}></View>
      </View>
    );
  };
export default function Character(){

const [data, setData] = useState();
const [info, setInfo] = useState({
    count:	0,
    pages:	0,
    next:	'',
    prev:	null
});
const [current, setCurrent] = useState({
    currentPage: 1,
    url: Config.API_URL
});

useEffect(() => {
    const dataGetter = async () => {
        const response = await axios.get(current.url); // Results ve Info 
        if(response.data !== undefined) {
            setInfo(response.data.info) //Info
            setData(response.data.results) // Results 
        }
        
    };
    dataGetter();
}, [current]);

    return (
        <SafeAreaView style={{backgroundColor:'#8A2BE2'}}>
        <SafeAreaView style={styles.container}>
        <TouchableOpacity 
        onPress={() => current.currentPage !== 1 && setCurrent({currentPage: current.currentPage - 1, url: info.prev})} >
        <Text style={styles.text}>Önceki Sezon</Text>
        </TouchableOpacity>
        <LineDivider />
        <Text style={styles.text}>{current.currentPage}</Text>
        <LineDivider />
        <TouchableOpacity 
        onPress={() => current.currentPage !== info.pages && setCurrent({currentPage: current.currentPage + 1, url: info.next})}>
        <Text style={styles.text}>Sonraki Sezon</Text></TouchableOpacity>
        </SafeAreaView>
        <ScrollView>
        <View>
            {
               data && data.map((item, key) => <CharacterCard key={key} character={item} />)
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
      flexDirection:'row',
      height:50,
      backgroundColor:'#00FF00',
      
    },
    text:{
        color:'#8A2BE2',
        fontWeight:'bold'
    }
  });