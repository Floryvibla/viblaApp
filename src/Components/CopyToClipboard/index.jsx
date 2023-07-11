import { View, Pressable } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';
import { colors } from '../../Constants/styles';
import { Text } from '../styles';
import ButtonAction from '../Button';

const CopyToClipboard = ({ copy, primary, btn, title, onCopyToBoard }) => {

    const [state, setState] = useState(false)

    const handleCopyToBoard = () => {
        setState(true)
        onCopyToBoard && onCopyToBoard(true)
        setTimeout(() => {
          setState(false)
          onCopyToBoard && onCopyToBoard(false)
        }, 2500);
    }

    const copyToClipboard = () => {
        Clipboard.setStringAsync(copy);
        Clipboard.getStringAsync()
        .then(() => handleCopyToBoard())
        .catch(err => console.log(err))
    };

  return (
    <Pressable style={[btn && {width: "100%"}, {marginHorizontal: 5}]} onPress={copyToClipboard}>
        {btn 
            ? <ButtonAction active={state} onPress={copyToClipboard} title={!state ? title ?? "Copiar código" : "Copiado!"} />
            :  !state
                ?  <MaterialCommunityIcons name="content-copy" size={20} color={primary ? colors.goldDark500 : colors.dark} />
                : <Text color={primary ? colors.successDark : colors.success} size={14}>Copiado!</Text>
        }
    </Pressable>
  )
}

export default CopyToClipboard