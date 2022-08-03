import React from 'react'
import { Text as RNText } from 'react-native'
import { isString } from '../utils/checkType'
import styles from '../assets/styles/text.styles'

const Text = ({ children, style, numberOfLines }) => {
    if(!isString(children)) throw new Error('Children must be a string') 
    
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