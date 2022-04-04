import React from 'react'
import {
    Container,
    HeaderArea,
    IconArea,
    CenterArea,
    Text,
    AreaRight,
    ScrollArea,
    AreaImg,
    Img,
    AreaMore
} from './styles'


const SlideDiscover = ({ item, title, count, icon }) => {
  console.log(item)
  return (
    <Container>
      <HeaderArea>
          <IconArea>
            <Text size={15} color='#ffc454'> {icon ?? '#'} </Text>
          </IconArea>
          <CenterArea>
            <Text weight='400' size={16}>{title ?? 'Popular neste momento'} </Text>
          </CenterArea>
          <AreaRight>
            <Text weight='bold'>{count ?? '120k'}{`>`}</Text>
          </AreaRight>
        </HeaderArea>
        <ScrollArea
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
        >
            {item && item.slice(0, 9).map((i, index) => (
              <AreaImg key={index}>
                <Img
                  source={{uri: `${i.thumb}`}} 
                  resizeMode= "cover"
                />
              </AreaImg>
            ))}
            <AreaMore>
              <Text size={10} color='#dededeb8'>
                Clique para visualizar mais conteúdo
              </Text>
            </AreaMore>
        </ScrollArea>
    </Container>
  )
}

export default SlideDiscover