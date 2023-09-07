import React from 'react';
import { Text, Wrapper } from '../../styles';
import { ModalBase, ModalBaseProps } from '../ModalBase';


type Props = {
  
}

function ModalComments({
  
}: Props) {
  return (
    <ModalBase name={'comment'}>
      <Wrapper>
        <Text>Testando</Text>
      </Wrapper>
    </ModalBase>
  )
}

export default ModalComments