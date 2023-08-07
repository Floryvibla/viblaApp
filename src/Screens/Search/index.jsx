import { View, Text } from 'react-native'
import React from 'react'
import { colors } from "../../Constants/styles"
// import StoryCard from '../../components/Stories'
// import Post from '../../components/Post'
import { Container, TextField } from './styles'
// import SearchHeader from '../../components/Search'
// import { data } from '../../datas/fakeStories'

const Search = ({ navigation }) => {

  const renderStory= ({ item } ) => (
    <StoryCard item= {item} />
  )

  const renderPost= ({ item } ) => (
    <Post item= {item} />
  )

  return (
    <Container>
      {/* <SearchHeader navigation={navigation} /> */}
      <TextField> Search </TextField>
    </Container>
  )
}

export default Search