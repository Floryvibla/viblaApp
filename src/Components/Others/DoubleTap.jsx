import { TouchableWithoutFeedback } from 'react-native';
import React from 'react'

const DoubleTap = ({
    children, 
    onDoubleTap = () => null, 
    delay= 300,
    lastTap= null
}) => {

    const handleDoubleTap = () => {
        const now= Date.now()

        if (lastTap && (now - lastTap) < delay) {
            onDoubleTap();
        } else {
            lastTap = now;
        }
    }

  return (
    <TouchableWithoutFeedback onPress={handleDoubleTap}>
        {children}
    </TouchableWithoutFeedback>
  )
}

export default DoubleTap