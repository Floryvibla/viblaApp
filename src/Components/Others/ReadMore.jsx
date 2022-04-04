import React, { useState } from 'react'
import styled from "styled-components/native"

function ReadMore({text, max}) {

    const [readMore, setReadMore] = useState(false)

    const toogleReadMore= () => {
        setReadMore(!readMore)
    }

    return (
        <Area onPress={toogleReadMore}>
            <Text> 
                {readMore ?
                    text
                : 
                    (
                        <>
                            {text.slice(0, 96)}
                            <Text seeMore={true} >...mais</Text>
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
export const Text= styled.Text`
    font-size: 14px;
    color: ${({seeMore}) => seeMore ? "#727273" : "#E6E6E6"};
`

export default ReadMore
