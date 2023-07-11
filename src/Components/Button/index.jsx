import React from 'react'
import Loading from '../Loading'
import { Button, ButtonLinearGradient, Text, Wrapper } from '../styles'

const ButtonAction = ({ onPress, title, size, sizeTitle, loading, active, mt, mb, btnmt, btnmb, children }) => {
  return (
    <Wrapper widthStyle={size ?? "100%"} marginTop={mt ?? 0} marginButton={mb ?? 0}>
      <Button  marginTop={btnmt} marginBottom={btnmb} onPress={onPress}>
        <ButtonLinearGradient
          notUse={loading ? loading : active}
        >
          {children ? children
            : loading
              ? <Loading size={30} />
              : <Text size={sizeTitle ?? 16} weight={"bold"}>{title}</Text>
          }
        </ButtonLinearGradient>
      </Button>
    </Wrapper>
  )
}

export default ButtonAction