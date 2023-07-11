import { FlatList, Pressable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as MediaLibrary from 'expo-media-library'
import { Text, ListArea } from '../styles'
import GrilImage from './GrilImage'
import Loading from '../Loading'
import { colors } from '../../Constants/styles'

const GalleryPicker = ({ preview }) => {

    const albumNames =  "Camera"
    const [data, setData] = useState([])
    const [selected, setSelected] = useState(false)

    const getAlbums = async () => {
        const getAllPhotos = await MediaLibrary.getAssetsAsync({
            first: 50,
            // after: 20,
            // album: getPhotos,
            sortBy: ['creationTime'],
            mediaType: ['photo']
        })
        const { assets } = getAllPhotos
        setData([...assets])
        preview && preview(assets[0])
        // console.log([...data, ...getAllPhotos.assets]);
    }

    useEffect(() => {
        getAlbums()
    }, [])

    const onSelectItem = item => {
        setSelected(item)
        preview && preview(item)
    }
    
    const renderPost= ({ item, index } ) => (
        <Pressable 
            onPress={() => onSelectItem(item)}
        >
          <GrilImage selected={selected?.uri} uri={item.uri} />
        </Pressable>
    )

  return (
    <View
        style={{flex: 1.5, zIndex: 50, backgroundColor: colors.dark}}
    >
      {data.length > 0 ?
        <FlatList 
            // ItemSeparatorComponent={() => <View style={{height: 3}} />}
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderPost}
            contentContainerStyle={{flexDirection: "column" }}
            numColumns={4}
            showsVerticalScrollIndicator={false}
            // onEndReached={() => getAlbums()}
            // onEndReachedThreshold={0.5}
            // horizontal
        />
        : <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Loading /> 
        </View>
      }
    </View>
  )
}

export default GalleryPicker