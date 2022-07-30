import React from 'react'
import { View } from 'react-native'
import styles from '../../assets/styles/layout.styles'

const Center = ({ children, style }) => {
    return (
        <View style={[styles.center, {...style}]}>
            {children}
        </View>
    )
}

export default Center