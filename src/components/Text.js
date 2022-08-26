import React from 'react'
import { Text as RNText } from 'react-native'
import { isString, isNull } from '../utils/checkType'
import styles from '../assets/styles/text.styles'

const Text = ({
    children = '',
    style,
    numberOfLines
}) => {
    if(isNull(children)) children = ''
    if(!isString(children)) children = children.toString()
    
    return (
        <RNText
            style={[styles, {...style}]}
            numberOfLines={numberOfLines}
        >
            {children}
        </RNText>
    )
}

export default Text