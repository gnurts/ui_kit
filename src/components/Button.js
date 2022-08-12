import React from 'react'

import { Pressable, View, Text, ActivityIndicator } from 'react-native'
import styles from '../assets/styles/button.styles'
import { isString } from '../utils/checkType'

const Button = ({
    title,
    icon,
    loading,
    color,
    backgroundColor,
    onPress
}) => {
    
    if(isString(color)) {
        color = styles[color] ?? color
    } else {
        color = 'white'
    }

    if(isString(backgroundColor)) {
        backgroundColor = styles[backgroundColor] ?? backgroundColor
    } else {
        backgroundColor = 'gray'
    }

    return (
        <View style={styles.container}>
            <Pressable
                android_ripple={{
                    color: styles.rippleColor,
                }}
                style={[ { backgroundColor }, styles.button ]}
                onPress={onPress}
            >
                {loading ? (
                    <ActivityIndicator color='white' />
                ) : (
                    <>
                        {title && <Text style={{ color, fontWeight: 'bold' }}>{ title }</Text>}
                        {icon && <View style={styles.left}>{icon}</View>}
                    </>
                )}
            </Pressable>
        </View>
    )
}

export default Button