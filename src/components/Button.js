import React, { isValidElement } from 'react'
import { isUndefined, isFunction, isString } from '../utils/checkType'

import { Pressable, View, Text } from 'react-native'
import styles from '../assets/styles/button.styles'


const Button = ({ title, icon, color = 'white', backgroundColor = 'gray', onPress }) => {

    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{
                    color: styles.rippleColor,
                }}
                style={[ { backgroundColor }, styles.button ]}
                onPress={onPress}
            >
                {title && <Text style={{ color, fontWeight: 'bold' }}>{ title }</Text>}
                {icon && <View style={styles.left}>{icon}</View>}
            </Pressable>
        </View>
    )
}

export default (props) => {
    const { title, onPress, icon } = props

    if(!isUndefined(title) && !isString(title)) throw new Error('title must be a string')
    if(!isUndefined(onPress) && !isFunction(onPress)) throw new Error('onPress must be a function')
    if(!isUndefined(icon) && !isValidElement(icon)) throw new Error('icon must be a react component')

    return <Button {...props} />
}