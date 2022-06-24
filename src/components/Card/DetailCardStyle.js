import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#8A2BE2',
        borderWidth:1,
        borderColor:'#4B0082'
        
    },
    inner_container:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10,
        marginVertical:10
    },
    image:{
        width:150,
        height:150,
        borderRadius:100,
        alignSelf:'center'
    },
    list:{
        borderWidth:1,
        height:'100%',
        backgroundColor:'#8A2BE2',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        marginTop:30
    },
    listName:{
        marginTop:80,
        fontWeight:'bold',
        textAlign:'center',
        color:'#00FF00'
    },
    listText:{
        marginTop:10,
        fontWeight:'bold',
        textAlign:'center',
        color:'#00FF00'
    },
})