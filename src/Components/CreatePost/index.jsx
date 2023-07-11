import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Area, AreaBox, BoxSelect, Text } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import CreatePhoto from './CreatePhoto'
import CreateVideo from './CreateVideo'
import CreateText from './CreateText'
import { othersActions } from '../../redux/actions/others.actions'
import { colors } from '../../Constants/styles'

const CreatePost = () => {

    const dispatch = useDispatch()
    const { typePostCreate } =  useSelector(state => state.others)
    const [openGalery, setOpenGalery] = useState(false)
    const { typesPost } = useSelector(state => state.posts)

    const options =  ["", ""]

    const type = typePostCreate.title === 'post' ? 'photo' : typePostCreate.title

    // const handleScreen = (typePost) => {
    //   dispatch(othersActions.setTypePostCreate(typePost))
    // }

    useEffect(() => {
      const filterData = typesPost.filter(i => i.title === type)[0]
      dispatch(othersActions.setTypePostCreate(filterData))
    }, [])

  return (
    <Area>
      {type === "photo" && <CreatePhoto/>}
      {/* {type === "Video" && <CreateVideo />} */}
      {type === "text" && <CreateText/>}

      {/* <AreaBox 
        data={options}
        keyExtractor={(item, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <BoxSelect active={typePostCreate.title === item} onPress={() => handleScreen(item)} key={item}>
            <Text color={typePostCreate.title === item ? colors.dark : colors.white_100}>{item}</Text>
          </BoxSelect>
        )}
      /> */}
        {/* {options.map(option => (
          
        ))} */}
    </Area>
  )
}

export default CreatePost