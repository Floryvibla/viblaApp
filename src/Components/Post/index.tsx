import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, Dimensions, Platform } from 'react-native';
import { BlurView } from 'expo-blur';
import { PostDataDto } from '../../dtos/postsDtos';
import { AreaText, BlurViewContainer, Container, ContainerMedia, ImageForBlurStyled, ImageStyled, WrapperImage, WrapperMedia } from './styles';
import TextUI from '../Text';
import { Wrapper } from '../styles';
import Header from './Header';
import SocialPost from './SocialPost';
import { Video, ResizeMode } from 'expo-av';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import VideoPlayerUI from '../VideoPlayer';

const { height:HEIGHTWINDOW, width:WIDTHWINDOW } = Dimensions.get('window')


export default function Post({ 
  username,
  url_avatar,
  is_founder,
  is_verified,
  name,
  createdAt,
  isActiveOptionsPost,
  info,
  medias,
  onPressDot,
  onPressPost
}: PostDataDto) {

  const isImage = medias?.data?.length > 0 && medias?.data[2].attributes.mime.split('/')[0] === 'image'

  const ScrollView1Ref = useRef<ScrollView>(null)
  const ScrollView2Ref = useRef<ScrollView>(null)
  const translateX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const handleAnimate = (offsetX: number) => {
    // Animação usando withSpring para animar com efeito de mola
    // translateX.value = withSpring(100, { damping: 10 });

    // Ou use withTiming para uma animação linear
    translateX.value = -offsetX
  };

  const [scrollToXAreaBlur, setScrollToXAreaBlur] = useState<number>(0)

  const itemWithLargestHeight = medias?.data !== null && medias?.data.reduce((prev, current) => {
    const prevHeight = prev?.attributes?.height ?? 0;
    const currentHeight = current.attributes?.height ?? 0;
    return currentHeight > prevHeight ? current.attributes.height : prev;
  }, null) as number

  const heightMedia = itemWithLargestHeight / 2

  // const scrollX = React.useRef(new Animated.Value(0)).current;

  // console.log("scrollX: ", scrollX);

  const handleScroll1 = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    if (ScrollView1Ref.current) {
      // console.log("offset2: ", offset);
      handleAnimate(offset)
      
      // ScrollView1Ref.current.scrollTo({ x: 200 });
    }
  };

  const handleScroll2 = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    if (ScrollView1Ref.current) {
      console.log("offset: ", offset);
      
      ScrollView1Ref.current.scrollTo({ x: 200 });
    }
  };

  useEffect(() => {
    if (ScrollView1Ref.current && ScrollView2Ref.current) {
      // handleAnimate()
      // ScrollView2Ref.current.scrollTo({ x: 200 });
    }
  }, [scrollToXAreaBlur])
  
  
  const heightMediaBlur = HEIGHTWINDOW

  return (
    <Container style={{backgroundColor: '#000'}}>
      {medias?.data?.length > 0 && (
        // <ScrollView 
        //   ref={ScrollView2Ref} 
        //   horizontal 
        //   style={[StyleSheet.absoluteFill]}
        //   onScroll={handleScroll2}
        // >
        //   <Animated.View style={[{
        //     width: '100%',
        //     height: HEIGHTWINDOW,
        //     position: 'relative'
        //   }, animatedStyle]}>
              
        //   </Animated.View>
        // </ScrollView>
        <View
          style={[{
            width: '100%',
            height: '100%'
          }, StyleSheet.absoluteFill]}
        >
          <Animated.View style={[{
            flexDirection:'row',
            paddingRight: 50
          },animatedStyle]}>
            {medias?.data.map(item => (
                <View key={item.id} style={[{
                  width: '100%',
                  height: '100%',
                }]}>
                  {item.attributes.mime.split('/')[0] === 'image' && (
                    <ImageForBlurStyled 
                      key={item.id} 
                      style={[StyleSheet.absoluteFill, {borderRadius: 0}]} 
                      source={{ uri: item.attributes.formats.thumbnail.url }} 
                      blurRadius={Platform.OS === 'ios' ? 0 : 20}
                    />
                  )}
                  {item.attributes.mime.split('/')[0] === 'video' && (
                    <Video 
                      source={{ uri: item.attributes.url}}
                      resizeMode={ResizeMode.COVER}
                      style={{width: '100%', height: '100%'}}
                    />
                    
                  )}
                </View>
              ))}
          </Animated.View>
        </View>
      )}
      <BlurViewContainer 
        style={{backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#000000be',}} 
        tint='dark' 
        intensity={100}
      >
        <Wrapper>
          <Header
            username={username}
            createdAt={createdAt} 
            isActiveOptionsPost={isActiveOptionsPost}
          />
          <AreaText onPress={onPressPost}>
            <TextUI variant='subtitle' style={{fontWeight: '400'}}>{info}</TextUI>
          </AreaText>
          {medias?.data?.length > 0 && (
            <ContainerMedia
              ref={ScrollView1Ref} 
              horizontal 
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                paddingHorizontal: 20,
                gap: 10,
                marginTop: 10
              }}
              onScroll={handleScroll1}
              scrollEventThrottle={16}
            >
              {medias?.data.map(item => (
                <WrapperMedia style={{height: heightMedia, elevation: 20}} key={item.id}>
                  {item.attributes.mime.split('/')[0] === 'image' && (
                    <WrapperImage height={item.attributes.height}>
                      <ImageStyled 
                        source={{uri: item.attributes.url}}
                        resizeMode='cover'
                      />
                    </WrapperImage>
                  )}
                  {item.attributes.mime.split('/')[0] === 'video' && (
                    <VideoPlayerUI
                      uri= {item.attributes.url}
                      isMuted={true}
                      height={heightMedia}
                    />
                  )}
                </WrapperMedia>
              ))}
            </ContainerMedia>
          )}
          <SocialPost 
            onPressDot={onPressDot}
            // share={isSharedPost} 
            // onPressComment={onPressComment}
            // onPressLike={onPressLike}
            // state={isLikedPost} 
            // countComment={countComment}
            // countLike={countLike}
          />
        </Wrapper>
      </BlurViewContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  blurContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
  },
});
