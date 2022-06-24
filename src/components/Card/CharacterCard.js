import { useNavigation } from "@react-navigation/native";
import React from "react";

import {View,Text} from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";

import styles from './CharacterCardStyle'


const CharacterCard = ({character})=> {
    const navigation = useNavigation();
return (
    <View style={styles.container}>
        <View style={styles.inner_container}>
        <Text style={styles.name}>{character.name}</Text>
       <View >
       <Text style={styles.episode}>{character.episode}</Text>
        <Text style={styles.air_date}>{character.air_date}</Text>
       </View>
        </View>
      <Icon name="rocket"  size={24} color={'#00FF00'} style={{alignSelf:'center',marginRight:5}}
        onPress={()=>navigation.navigate('DetailPage', {url: character.url})}
      /> 
    </View>
)
}
export default CharacterCard