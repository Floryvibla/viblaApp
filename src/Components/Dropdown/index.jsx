import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Container, Drop, TextSelect } from './styles'
import { colors } from "../../Constants/styles"
import { useDispatch, useSelector } from 'react-redux';
import { othersActions } from '../../redux/actions/others.actions';

const Dropdown = ({ items, titleCheck, type }) => {
  const dispatch = useDispatch()
  const { openDropdown, titleDropdown } = useSelector(state => state.others)
  const { typesPost } = useSelector(state => state.posts)
  const dataInitial = ["Todos", "Fotos", "Text"]

  const data =  items ?? typesPost
  const checked = titleCheck ?? titleDropdown

  const handleDropdown= (item) => {
    if (type === "create post") {
      if (item.title === 'photo') {
        dispatch(othersActions.setTypePostCreate({...item, title: "post"}))
      } else {
        dispatch(othersActions.setTypePostCreate(item))
      }
      dispatch(othersActions.closeDropdown())
    } else {
      dispatch(othersActions.setTitleDropdown(title))
    }
  }

  const handleTitle = title => {
    if (type === 'create post') {
      // console.log(checked);
      switch (title) {
        case 'photo':
          return "post"
      
        default:
          return title;
      }
    } else {
      switch (title) {
        case 'photo':
          return "fotos"
      
        default:
          return title;
      }
    }
  }

  console.log("typesPost: ", typesPost);

  return (
    <Drop center={type === "create post"} style={{zIndex: 50}}>
      {typesPost && data.map((item, index) => (
        <Container last={index === data.length-1} key={item.id} onPress={() => handleDropdown(item)}>
          <TextSelect style={{fontWeight: "600", textTransform: 'capitalize'}}>
            { handleTitle(item.title) }
          </TextSelect>
          {checked === item.id && <Ionicons color={colors.dourado} size={20} name="checkmark" />}
        </Container>
      ))}
    </Drop>
  )
}

export default Dropdown