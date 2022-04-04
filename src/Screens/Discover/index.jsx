import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { colors } from "../../Constants/styles"
import StoryCard from '../../Components/Stories'
import Post from '../../Components/Post'
import Search from '../../Components/Search'
import { Container } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { othersConstants } from '../../Constants/redux'
import { data } from '../../datas/discover'
import SlideImage from '../../Components/Slide'
import SlideDiscover from '../../Components/SlideDiscover'

const Discover = ({ navigation }) => {
  const dispatch= useDispatch()
  const { openSearch } = useSelector(state => state.others)
  const W= Dimensions.get('window').height
  const [imageActive, setImageActive] = useState(0)

  const images= ['https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.6435-9/86822069_2521595954613134_6426990676642103296_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=340051&_nc_eui2=AeGMj7HOo4_1KT5Smv4FaivFfT7EoXZKYlh9PsShdkpiWN1594B4uUwtcn3PjhTyW0L6Rs9mvvu1xRcfVzWaLEio&_nc_ohc=XReOMtBRlLcAX9EQbsP&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT_vnnniq4PiXaHxFSfpySugPLUC4D7yCNMWb-zi7Txz0Q&oe=626E5138',
  'https://developers.google.com/codelabs/maps-platform/maps-platform-101-js/img/590815267846f166.png?hl=pt-br',
  'https://scontent.fcgh14-1.fna.fbcdn.net/v/t39.30808-6/277554234_4976531939134605_6413802417062590819_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHo4vdtRHsHcVO7hO1Vq87RIUH4EWwZ6nghQfgRbBnqeK6chWJjKXdjI2IPfBEv-DDg0utlxNjjhqO8Iqzi0BEs&_nc_ohc=Edj8HMhGgRkAX_P78U2&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT9a76pYITQmTRw2pAZzM6zP7610fQO1S3g83fSJ0TgZPg&oe=624E77DE',
  'https://scontent.fcgh14-1.fna.fbcdn.net/v/t1.6435-9/132009624_1458027454404160_5883947454541786915_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=340051&_nc_eui2=AeGrFszgEsn2vxjI15e8BtvfFQb5yRXofGkVBvnJFeh8aVYmYS9lZ2MqaWNW30BY9-hIU_3ZqcnMQNPUaJC93aJe&_nc_ohc=6fVsjVsK_A0AX9c5cz3&tn=OOU8fMa9MEFRp_YP&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT--s3rlDP4aswIVFXOnse9ILjO0hUMuuYgMV0TUMGVWxA&oe=626EC9AF',
  'https://scontent.fcgh14-1.fna.fbcdn.net/v/t39.30808-6/275888318_2490091601125826_8476799898796478399_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeGXrYMQoxDHwZzs0diDPJKE1IZMzY_TFXTUhkzNj9MVdAZAhnCwwtUJ-1UupjLANLhrqAga6_vlFQWPeVtGrOBp&_nc_ohc=KiCf69mHS5YAX8Ngvfz&_nc_ht=scontent.fcgh14-1.fna&oh=00_AT_XxMES8Ez9-kwlRX84RS-fiCWumAb9PpS7-uO7U3pqeg&oe=624DC23B',
]

  const renderStory= ({ item } ) => (
    <StoryCard item= {item} />
  )

  const renderPost= ({ item } ) => (
    <Post item= {item} />
  )

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
    // console.log(e);
  }

  return (
    <Container>
      <Search onPressIn={handleOpen} state={openSearch} navigation={navigation} />
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
          title={i.type}
          item={i.data}
        />
      ))}
    </Container>
  )
}

export default Discover