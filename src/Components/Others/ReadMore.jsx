import React, { useState } from 'react'
import styled from "styled-components/native"
import { Text } from '../styles'

function ReadMore({ text, max, centerText, size }) {

    const [readMore, setReadMore] = useState(false)

    const toogleReadMore= () => {
        setReadMore(!readMore)
    }

    return (
        <Area onPress={toogleReadMore}>
            <Text start size={size ?? 16}> 
                {readMore < 100 ?
                    text
                : 
                    (
                        <>
                            {text.slice(0, max ?? 96)}
                            <Text start second>...mais</Text>
                        </>
                    
                    )
                    
                } 
            </Text> 
        </Area>
        
    )
}

export const Area= styled.TouchableHighlight`
    /* font-size: 12px;
    color: #4b5563;
    font-weight: 600; */
    padding: 0px 10px;
`

export default ReadMore
