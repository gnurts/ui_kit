import React from 'react'

import { Pressable, View, Text, ActivityIndicator } from 'react-native'
import styles from '../assets/styles/button.styles'


const Button = ({ title, icon, loading, color = 'white', backgroundColor = 'gray', onPress }) => {

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