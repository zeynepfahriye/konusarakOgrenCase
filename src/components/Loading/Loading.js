import React from 'react'
import { View } from 'react-native';
import Lottie from 'lottie-react-native';

const Loading = () => {
const assets = {
    lottieFiles: {
        loading: require('../../../assets/example.json')
    }
}
    return(
        <View style={{flex:1, justifyContent:'center'}}>
            <Lottie style={{width: '35%', zIndex: 1, alignSelf: 'center'}} source={assets.lottieFiles.loading} autoPlay loop/>
        </View>
        
    )
}
export default Loading