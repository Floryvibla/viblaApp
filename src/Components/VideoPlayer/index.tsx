import { View, Text, StyleSheet } from 'react-native'
import React, { useRef, useState } from 'react'
import { BoxIcon, Container, VideoPlayerPropsStyled, WrapperVideo } from './styles'
import { ResizeMode, Video, VideoProps, VideoReadyForDisplayEvent } from 'expo-av'
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../Constants/styles';

export type VideoPlayerProps = VideoPlayerPropsStyled & VideoProps &{
    isPreview?: boolean
    uri?: string
    resize?: keyof typeof ResizeMode
    shadow?: boolean
    defaultHeight?: boolean
}

export default function VideoPlayerUI({
    isPreview = false,
    resize,
    uri,
    isMuted = true,
    height,
    shadow,
    defaultHeight = false,
    ...rest
}: VideoPlayerProps) {

    const videoRef = useRef<Video>(null);

    const [dataNaturalSize, setDataNaturalSize] = useState<VideoReadyForDisplayEvent>({} as VideoReadyForDisplayEvent)

    const handleOnLoad = async () => {
        if (videoRef.current) {
          const naturalSize = await videoRef.current.getStatusAsync().then((status) => status);
        //   console.log('Altura do vídeo:', naturalSize);
        }
    };

    const handleOnReadyForDisplay = async (event: VideoReadyForDisplayEvent) => {
        setDataNaturalSize(event)
    };


    const isLandscape = dataNaturalSize?.naturalSize?.orientation === 'landscape'
    const heightVideo = dataNaturalSize?.naturalSize?.height
    const heightVideoLandscape = (heightVideo - height) / 3
    const heightVideoWrapped = defaultHeight ? '100%' : isLandscape ? heightVideoLandscape : '100%'
    const widthVideo = dataNaturalSize?.naturalSize?.width
    
    const heightView = height

    const resizeVideo: keyof typeof ResizeMode = resize ?? isLandscape ? 'COVER' : 'COVER'

    // console.log("Quee: ", isLandscape && heightView);

  return (
    <Container 
        isPreview={isPreview}
        height={heightView}
    >
        <WrapperVideo style={[{height: heightVideoWrapped}]}>
            <Video
                ref={videoRef}
                onReadyForDisplay={handleOnReadyForDisplay}
                source={{uri}}
                onLoad={handleOnLoad}
                resizeMode={ResizeMode[resizeVideo]}
                style={[{width: '100%', height: '100%', borderRadius: 10}]}
                isMuted={isMuted}
                {...rest}
            />
            <BoxIcon>
                <Ionicons 
                    name={`ios-volume-${isMuted ? 'mute' : 'high'}`}
                    size={20} 
                    color={colors.white_100} 
                />
            </BoxIcon>
        </WrapperVideo>
    </Container>
  )
}

const styles = StyleSheet.create({
    boxShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    }
})