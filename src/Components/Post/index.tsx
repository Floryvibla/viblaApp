import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, Dimensions, Platform, NativeScrollEvent } from 'react-native';
import { BlurView } from 'expo-blur';
import { PostDataDto, PostDto } from '../../dtos/postsDtos';
import { AreaText, BlurViewContainer, Container, ContainerBlurView, ContainerMedia, Content, ImageForBlurStyled, ImageStyled, WrapperImage, WrapperMedia } from './styles';
import TextUI from '../Text';
import { Wrapper } from '../styles';
import Header from './Header';
import SocialPost from './SocialPost';
import { Video, ResizeMode } from 'expo-av';
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';

import VideoPlayerUI from '../VideoPlayer';

const { height:HEIGHTWINDOW, width:WIDTHWINDOW } = Dimensions.get('window')

type PostDataDtoView = PostDataDto & {
  isCurrentPost?: boolean
  isSelfPost?: boolean
} 


export default function Post({ 
  username,
  url_avatar,
  is_founder,
  is_verified,
  id,
  name,
  isSelfPost,
  createdAt,
  isActiveOptionsPost,
  info,
  medias,
  isCurrentPost,
  onPressDot,
  onPressPost
}: PostDataDtoView) {

  const isImage = medias?.data?.length > 0 && medias?.data[2].attributes.mime.split('/')[0] === 'image'

  const ScrollView1Ref = useRef<ScrollView>(null)
  const ScrollView2Ref = useRef<ScrollView>(null)
  const translateX = useSharedValue(0);

  const [currentMedia, setCurrentMedia] = useState<number | null>(0);


  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: translateX.value }],
    };
  });

  const handleAnimate = (offsetX: number) => {
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

  const handleScrollX = (event) => {
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

  const handleScroll = (event: any) => {
    const xOffset = event.nativeEvent.contentOffset.x;
    const itemWidth = WIDTHWINDOW / 1.5; // Width of each item in the ScrollView
    const currentItemIndex = Math.floor(xOffset / itemWidth);

    setCurrentMedia(currentItemIndex)

    handleScrollX(event)
    
  }

  const handleFontSize = () => {
    if (medias?.data?.length > 0) return 20

    if (info.length <= 100) {
      return 45
    } else if(info.length > 100 && info.length <= 300) {
      return 35
    } else {
      return 20
    }
  }

  const fontSizeScale = handleFontSize()
  

  return (
    <Container isSelfPost={isSelfPost} style={{backgroundColor: isSelfPost ? 'transparent' : '#000'}}>
      {medias?.data?.length > 0 && (
        <View
          style={[{
            width: '100%',
            height: '100%',
            overflow:'hidden',
            borderRadius: 20
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
                  borderRadius: 20
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
                      style={{width: '100%', height: '100%', borderRadius: 20}}
                    />
                    
                  )}
                </View>
              ))}
          </Animated.View>
        </View>
      )}
      <ContainerBlurView isSelfPost={isSelfPost}>
        <BlurViewContainer 
          style={{backgroundColor: Platform.OS === 'ios' ? 'transparent' : '#000000be'}} 
          tint='dark' 
          intensity={100}
        >
          <Content isSelfPost={isSelfPost}>
            <Header
              username={username}
              createdAt={createdAt} 
              isActiveOptionsPost={isActiveOptionsPost}
            />
            <AreaText isSelfPost={isSelfPost} onPress={onPressPost}>
              <ScrollView>
                <TextUI 
                  variant='subtitle' 
                  style={{
                    fontWeight: '400', 
                    fontSize: isSelfPost ? fontSizeScale : 16,
                  }}
                >
                  {info}
                </TextUI>
              </ScrollView>
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
                onScroll={handleScroll}
                scrollEventThrottle={16}
              >
                {medias?.data.map((item, index) => (
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
                        shouldPlay={isCurrentPost && currentMedia === index}
                        isLooping
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
          </Content>
        </BlurViewContainer>
      </ContainerBlurView>
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
