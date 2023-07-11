import { View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import CameraVB from '../../Components/Camera'

const CreateStory = () => {

  const navigation = useNavigation()
  // const [data, setData] = useState()

  const handleCloseCamera = () => {
    navigation.goBack()
  }

  const handleDataCamera = (dataCamera) => {
    navigation.navigate('editor story', {
      data: dataCamera
    })
    // console.log(dataCamera);
  }

  return (
    <View>
      <CameraVB 
        isStory
        onClose={handleCloseCamera}
        onData={handleDataCamera}
      />
    </View>
  )
}

export default CreateStory