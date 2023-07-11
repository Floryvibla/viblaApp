import React from 'react'
import { colors } from '../../Constants/styles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text, Wrapper } from '../styles'
import ReadMore from '../Others/ReadMore';

const CardBiographie = ({ username, verified, profession, bio }) => {
  return (
    <Wrapper justify="space-between" marginTop={0} marginBottom={10}>
        <Wrapper marginTop={10} marginBottom={5} direction="row">
            <Text weight="bold"> {username} </Text>
            {verified && 
                <MaterialCommunityIcons 
                    name="check-decagram" 
                    size={15} 
                    color={colors.gold}
                    style={{marginTop: 3}}
                />
            }
        </Wrapper>
        {profession && <Text color={colors.darkGray} size={14}> {profession} </Text>}
        {bio &&
            <Wrapper widthStyle={"85%"} marginTop={0} marginBottom={0}>
                <ReadMore 
                    text={bio}
                    centerText
                    max={80}
                />
                {/* <Text color={colors.lightGray} size={15}> {bio} </Text> */}
            </Wrapper>
        }
    </Wrapper>
  )
}

export default CardBiographie