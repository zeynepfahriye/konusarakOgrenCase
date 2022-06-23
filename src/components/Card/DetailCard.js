import axios from "axios";
import React,{useState,useEffect} from "react";
import {View, Text,Image, TouchableOpacity, Modal, Dimensions} from 'react-native'



const DetailCard = ({detail})=> {
 const [list, setList] =useState([])
 const [modal, setModal] = useState(false)

 useEffect(() => {
    const fetchData = async()=>{
        const response = await axios.get(detail)
        setList(response.data)
    }
    fetchData()
 }, [list])

return (
  <View style={{flex:1,backgroundColor:'#8A2BE2',borderWidth:1,borderColor:'#4B0082'}}>
  <TouchableOpacity onPress={() => setModal(true)}>
  <View style={{flexDirection:'row',alignItems:'center',marginHorizontal:10,marginVertical:10}}>
 <Image source={{uri:list.image}}
 style={{width:80,height:80,borderRadius:100}}
  />
  <Text style={{marginLeft:10,color:'white',fontSize:20,fontWeight:'bold',fontStyle:'italic'}}>{list.name}</Text>
  </View>
  </TouchableOpacity>
  <Modal visible={modal}>
  <View style={{backgroundColor:'#00FF00'}}>
  <TouchableOpacity onPress={() => setModal(false)}>
        <Text style={{alignItems:'flex-start',marginTop:40,marginLeft:10}}> X </Text>
    </TouchableOpacity>
    
  <Image 
    source={{uri:list.image}}
    style={{width:150,height:150,borderRadius:100,alignSelf:'center'}}
  />
  
  <View style={{borderWidth:1,height:'100%',backgroundColor:'#8A2BE2',borderTopRightRadius:30,borderTopLeftRadius:30,marginTop:30}}>
  <Text style={{marginTop:80,fontWeight:'bold',textAlign:'center',color:'#00FF00'}}>Name : {list.name}</Text>
    <Text style={{marginTop:10,fontWeight:'bold',textAlign:'center',color:'#00FF00'}}>Status : {list.status}</Text>
    <Text style={{marginTop:10,fontWeight:'bold',textAlign:'center',color:'#00FF00'}}>Species : {list.species}</Text>
    <Text style={{marginTop:10,fontWeight:'bold',textAlign:'center',color:'#00FF00'}}>Gender : {list.gender}</Text>
  </View>
  </View>
  </Modal>

 

  </View>
)
}
export default DetailCard
