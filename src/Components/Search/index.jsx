import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { othersConstants } from '../../Constants/redux'
import { Container, BtnBack, IconBack ,Content, IconSearch, Input, BtnClose ,IconCLose, BtnSearch, TextSearch } from './styles'
import { useDispatch, useSelector } from 'react-redux'

const Search = ({ navigation, onPressIn }) => {
    const dispatch= useDispatch()
    const { openSearch } = useSelector(state => state.others)
    const [text, setText] = useState('')
    const [close, setClose] = useState(false)

    const handleBack= () => {
    dispatch({
      type: othersConstants.SET_OPENSEARCH,
      payload: false
    })
    navigation.goBack()
  }

  const handleClose = () => {
    setText('')
  }

  const handleChange = (e) => {
    setText(e)
  }

  return (
    <Container>
        <BtnBack onPress={handleBack}>
            <IconBack />
        </BtnBack>
        <Content>
            <IconSearch />
            <Input 
                placeholder='Pesquisar...' 
                onPressIn={onPressIn} 
                onChangeText={handleChange}
                value={text}
            />
            {openSearch &&
                text.length > 0 &&
                    <BtnClose onPress={handleClose}>
                        <IconCLose  />
                    </BtnClose>
            }
        </Content>
        {openSearch &&
            <BtnSearch>
                <TextSearch> Pesquisar </TextSearch>
            </BtnSearch>
        }
    </Container>
  )
}

export default Search