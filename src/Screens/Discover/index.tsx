import { View, Text, Dimensions, Pressable, Platform } from 'react-native'
import React, { useState } from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../components/Stories'
import Post from '../../components/Post'
import Search from '../../components/Search'
import { ContainerScroll } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { othersConstants } from '../../redux/constants'
import { data } from '../../datas/discover'
import SlideImage from '../../components/Slide'
import SlideDiscover from '../../components/SlideDiscover'
import { SafeArea, ScrollArea } from '../../components/styles'
import { useNavigation } from '@react-navigation/native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { useNavigate } from '../../hooks/useNavigate'

const Discover = () => {
  const dispatch= useDispatch()
  // const navigation = useNavigation()
  const { navigation } = useNavigate()
  const { openSearch } = useSelector((state: any) => state.others)
  const W= Dimensions.get('window').height
  const [imageActive, setImageActive] = useState(0)

  const heightBottomBar = useBottomTabBarHeight()

  const images= ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGDKlrEl8nuM4ScTybjh-NLgcT2O6uLthkVw&usqp=CAU',
  'https://pps.whatsapp.net/v/t61.24694-24/204812481_606052734227264_1729602996482981335_n.jpg?ccb=11-4&oh=01_AVwwt1-w3parhyQTyvZfTi4bBWpPTljBrh8zhTHkstx7qA&oe=633943D2',
  'https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.6435-9/84487336_2974456285953289_3959418685327671296_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=340051&_nc_ohc=8KxFKyEP82sAX-DP7RP&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT8l6_9XU2Rtl75iSHxAis-KsMSiD_-feKgBlddlL5XN8Q&oe=634F2104',
  'https://images.sympla.com.br/61856a01f386d-lg.png',
  'https://espacopop.com.br/wp-content/uploads/2022/09/A-Mulher-Rei-820x380.png',
]

  // const renderStory= ({ item } ) => (
  //   <StoryCard item= {item} />
  // )

  // const renderPost= ({ item } ) => (
  //   <Post item= {item} />
  // )

  const handleOpen= () => {
    dispatch({
      type: othersConstants.SET_OPENSEARCH,
      payload: true
    })
    navigation.navigate('Search')
  }

  const handleScroll = e => {
    if (e) {
      const slide= Math.ceil(e.contentOffset.x / e.layoutMeasurement.width)
      if (slide != imageActive) {
        setImageActive(slide)
      }
    }
  }
  

  return (
    <ContainerScroll style={{ paddingTop: Platform.OS === 'ios' ? 50 : 20, paddingBottom: heightBottomBar}}>
      <Search 
        onPressIn={handleOpen} 
        // state={openSearch} 
        navigation={navigation} 
      />
      <SlideImage 
        onScroll={handleScroll} 
        item={images}
        active={imageActive}
      />
      {/* <SlideDiscover title={`Destaque`}/> */}
      {data.map((i, index) => (
        <SlideDiscover 
          count={i.count} 
          key={index} 
          // icon
          icon={false}
          title={i.type}
          item={i.data}
        />
      ))}
      <View style={{height: heightBottomBar * 1.6}} />
    </ContainerScroll>
  )
}

export default Discover