import { TouchableWithoutFeedback } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const DoubleTap = ({
    children, 
    onDoubleTap = () => null, 
    delay= 300,
    lastTap= null,
    style,
    feed,
    onPress
}) => {

    const navigation = useNavigation()

    // const handleDoubleTap = () => {
    //     if (feed) {
    //         navigation.navigate("video")
    //     } else {
            
    //     }
    //     // const now= Date.now()

    //     // if (lastTap && (now - lastTap) < delay) {
    //     //     onDoubleTap();
    //     // } else {
    //     //     lastTap = now;
    //     // }
    //     console.warn("Post");
    // }

  return (
    <TouchableWithoutFeedback style={style} onPress={onPress}>
        {children}
    </TouchableWithoutFeedback>
  )
}

export default DoubleTap