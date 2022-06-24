import axios from "axios";
import React,{useState,useEffect} from "react";
import {View, Text,Image, TouchableOpacity, Modal, Dimensions} from 'react-native'
import styles from './DetailCardStyle'


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
  <View style={styles.container}>
  <TouchableOpacity onPress={() => setModal(true)}>
  <View style={styles.inner_container}>
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
    style={styles.image}
  />
  
  <View style={styles.list}>
    <Text style={styles.listName}>Name : {list.name}</Text>
    <Text style={styles.listText}>Status : {list.status}</Text>
    <Text style={styles.listText}>Species : {list.species}</Text>
    <Text style={styles.listText}>Gender : {list.gender}</Text>
  </View>
  </View>
  </Modal>
  </View>
)
}
export default DetailCard
