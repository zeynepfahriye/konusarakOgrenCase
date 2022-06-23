import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:10,
        flexDirection:"row",
        backgroundColor:'#8A2BE2',
        borderWidth:1,
        borderColor:'#4B0082'
        
    },
    inner_container:{
        padding:10,
        flex:1,
        justifyContent:'center'
    },
    name:{fontSize:20,fontWeight:'bold',color:'white'},
    info_container:{
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        
    },
    air_date:{fontStyle:'italic',color:'white',opacity:0.5,fontWeight:'300'},
    episode:{color:'white'},
    detail:{
        width:60,
        height:60,
         borderWidth: 1,
        padding: 8,
        borderRadius: 15,
    justifyContent:'center'
    },
    
    image:{},
    body:{padding:10,
    flex:1,
    justifyContent:'center'
    },


  
})