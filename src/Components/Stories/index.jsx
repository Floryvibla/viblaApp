import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Container, StoryImageBackground, PerfilContainer, TextArea, TextName } from './styles'
import { data } from '../../datas/fakeStories'
import { LinearGradient } from 'expo-linear-gradient';
import CirclePerfil from '../Others/CirclePerfil'
import { colors } from "../../Constants/styles"
import { Text } from '../styles';


const StoryCard = ({ item, onPresseAvatar }) => {
    const image = { uri: "https://images.nappy.co/uploads/large/output-1-2001598124787bv8h0vo4spcs1fo23wpnk9rigncm73xb2sfswqzelhe6nblfivnc2bxt6ydytfntstnrvk9pqwmbydjcq1mtfrbzrtznzwpzvvao.jpg?auto=format&fm=jpg&w=1000&h=427&fit=clip&q=75" };

    const id = 10

    const username = item?.username?.length > 9 ? `${item?.username.slice(0, 9)}...` : item?.username

  return (
    <Container>
        <StoryImageBackground 
            source={{uri: `${item.id === id ? item.imageProfile : item.story[0]}`}} 
            resizeMode= "cover" 
            borderRadius={15} 
        />
        <LinearGradient
            colors={['transparent', 'rgba(0,0,0,1)']}
            style={styles.background}
        />
        <PerfilContainer>
            <CirclePerfil 
                imgSrc={item.id !== id && item.imageProfile}
                colorCircle= {colors.gold}
                story
                onPress={onPresseAvatar}
            />
        </PerfilContainer>
        <TextArea>
            <Text  bold size={14}> {item.id === id ? "Seu story" : username} </Text>
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