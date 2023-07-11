import React from 'react'
import { Pressable } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { ButtonTouch, Text, Wrapper } from '../styles'
import { colors } from '../../Constants/styles';

const BarOption = ({ titleIcon, title, right }) => {
  return (
    <Wrapper style={{paddingHorizontal: 20}} width={1} between row marginTop={!titleIcon ? 0 : 10} marginBottom={10}>
        <Wrapper marginTop={0} marginBottom={0} widthStyle="80%" justify="flex-start" row>
            <MaterialCommunityIcons style={{marginRight: titleIcon ? 10 : 0}} name={titleIcon} size={24} color={colors.white} />
            <Text size={16}> {title} </Text>
        </Wrapper>
        {title.toLowerCase() !== "sair" &&
            <Wrapper marginTop={0} marginBottom={0} widthStyle="20%" justify="flex-end" row>
                <MaterialIcons name="keyboard-arrow-right" size={24} color={colors.darkGray} />
            </Wrapper>
        }
    </Wrapper>
  )
}

export default BarOption