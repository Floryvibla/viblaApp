import React from 'react'
import { colors } from '../../Constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from '../styles'
import ReadMore from '../Others/ReadMore';
import TextUI from '../Text';
import { Image, View } from 'react-native';
import { Container, Wrapper } from './styles';

interface CardBiographieProps {
    name: string;
    isVerified?: boolean;
    isFounder?: boolean;
    profession?: string;
    biography?: string;
}

const CardBiographie = ({ 
    name,
    biography,
    profession,
    isVerified,
    isFounder
 }: CardBiographieProps) => {

  return (
    <Container>
        <Wrapper>
            <TextUI variant='title'>{name}</TextUI>
            {isVerified && 
                <MaterialCommunityIcons 
                    name="check-decagram" 
                    size={15} 
                    color={colors.gold}
                    style={{marginTop: 3}}
                />
            }
            {isFounder && (
                <Image 
                    source={require('../../Assets/vibla/icon_vb_gold.png')}
                    style={{width: 15, height: 20}}
                    resizeMode='cover'
                />
            )}
        </Wrapper>
        {profession && <TextUI align='center' variant='secondary' size={14}>{profession}</TextUI>}
        {biography && (
            <View style={{ paddingHorizontal: 30 }}>
                <TextUI align='center' variant='subtitle'>{biography}</TextUI>
            </View>
        )}
    </Container>
  )
}

export default CardBiographie