import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Modalize } from 'react-native-modalize';
import { Dimensions, Platform, View, ViewToken } from 'react-native';
import { useModal } from '../../../hooks/useModal';
import { PostDto } from '../../../dtos/postsDtos';
import { colors } from '../../../Constants/styles';
import SelfPost from '../../../Screens/SelfPost';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

export const SeflPostModal = () => {

  const modalizeRef = useRef<Modalize>(null);

  const { modal: {isOpenModal, displayName, data: dataModal}, onCloseModal } = useModal()

  const { dataPost, indexCurrentPost } = dataModal

  const [currentPost, setCurrentPost] = useState<PostDto | null>(null)

  const snapToOffsets = [...Array(dataModal?.dataPost?.length)].map((_, i) => i * (WIDTH * 0.93 - 10) + (i-1)*10)
  const dataLengthIndex = dataPost.length - 1
  const itemLayoutLength = dataLengthIndex === indexCurrentPost ? 0 : 10

  const onViewableItemsChanged = useRef(({ changed }: { changed: ViewToken[] }) => {
    if (changed && changed.length > 0) {
      setCurrentPost(changed[0].item)
      
    }
  });

  const handleCloseModal = () => {
    onCloseModal('selfpost')
  }

  useEffect(() => {
    if (isOpenModal) {
      modalizeRef.current?.open();
    }else{
      modalizeRef.current?.close();
    }
  }, [isOpenModal])
  

  return (
    <Modalize
      onClose={handleCloseModal} 
      ref={modalizeRef}
      modalHeight={HEIGHT}
      modalStyle={{
        backgroundColor: colors.dark
      }}
      flatListProps={{
        data: dataPost as PostDto[],
        renderItem: ({item, index}) => <SelfPost item={item} currentPost={currentPost} />,
        keyExtractor: (_, index) => index.toString(),
        horizontal: true,
        snapToAlignment: 'center',
        scrollEventThrottle: 16,
        decelerationRate: 'fast',
        snapToOffsets,
        showsHorizontalScrollIndicator: false,
        initialScrollIndex: indexCurrentPost,
        onViewableItemsChanged: onViewableItemsChanged.current,
        getItemLayout: (data, index) => ({
          length: WIDTH * 0.93 - itemLayoutLength,
          offset: (WIDTH * 0.93 - itemLayoutLength) * index,
          index,
        })
      }}
    />
  );
};