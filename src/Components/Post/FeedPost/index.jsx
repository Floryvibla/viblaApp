import React, { useState } from 'react'
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import FeedPhoto from './FeedPhoto'
import { Box, BoxContainer, Text, Wrapper } from '../../styles'
import { colors } from '../../../Constants/styles'

const FeedPost = ({ data, children, type }) => {

  const WIDTH= Dimensions.get('window').width

  const dispatch = useDispatch()
  const [postActive, setPostActive] = useState(false)
  const [like, setLike] = useState(0)

  const navigation = useNavigation()

  const handleLike = (item) => {
    setLike(!like)
    setPostActive(item.id)
    console.log(item.id);
  }

  const handleComment = () => {
    navigation.navigate('selfPost')
  }

  // console.log(type);

  return (
    <BoxContainer
      column={type.toLowerCase() === "texts"}
    >
      {data?.map((item, index) => (
          <Box 
            key={index} 
            video={type.toLowerCase() === "videos"}
            style={type.toLowerCase() === "texts" && {marginTop: 30, marginBottom: 30}}
          >
            {item.type?.toLowerCase() === "fotos" && <FeedPhoto imgPost={item.imageProfile}/>}
            {item.type.toLowerCase() === "text" && type.toLowerCase() !== "texts" &&
              <Wrapper 
                style={{height: "100%", padding: 10, backgroundColor: colors.dark}} 
                widthStyle={"100%"}
                marginTop={0} 
                marginBottom={0}
              >
                <Text weight={600} size={12}> 
                  {item?.info?.length > 100 ? item?.info?.slice(0, 100)+"..." : item?.info} 
                </Text>
              </Wrapper>
            }
            {type.toLowerCase() === "texts" &&
              <TextPost 
                imgPost={item.story}
                onDoubleTap={handleLike}
                state={postActive === item.id}
                item={item}
                onPressComment={handleComment}
                onPressLike={() => handleLike(item)}
                style={{paddingBottom: 20}}
                auth={true}
              />
            }
            {item.type?.toLowerCase() === "video" && 
              <Wrapper 
                style={{height: "100%", position: 'relative'}} 
                marginTop={0} 
                marginBottom={0}
                widthStyle={"100%"}
              >
                <FeedPhoto imgPost={item.story[0]}/>
                <Ionicons 
                  name="ios-videocam" 
                  size={24} color="white"
                  style={{position: "absolute", top: 0, right: 5}} 
                />
              </Wrapper>
            }
          </Box>
        ))
      }
    </BoxContainer>
  )
}

export default FeedPost