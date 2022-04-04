import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Container, StoryImageBackground, PerfilContainer, TextArea, TextName } from './styles'
import { data } from '../../datas/fakeStories'
import { LinearGradient } from 'expo-linear-gradient';
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"


const StoryCard = ({ item }) => {
    const image = { uri: "https://images.nappy.co/uploads/large/output-1-2001598124787bv8h0vo4spcs1fo23wpnk9rigncm73xb2sfswqzelhe6nblfivnc2bxt6ydytfntstnrvk9pqwmbydjcq1mtfrbzrtznzwpzvvao.jpg?auto=format&fm=jpg&w=1000&h=427&fit=clip&q=75" };
  return (
    <Container>
        <StoryImageBackground 
            source={{uri: `${item.story[0]}`}} 
            resizeMode= "cover" 
            borderRadius={15} 
        />
        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,1)']}
            style={styles.background}
        />
        <PerfilContainer>
            <CirclePerfil 
                imgSrc={item.imageProfile}
                colorCircle= {colors.dark}
            />
        </PerfilContainer>
        <TextArea>
            <TextName> {item.username} </TextName>
        </TextArea>
    </Container>
  )
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 60,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    }
  });

export default StoryCard