import React from 'react'
import { View } from 'react-native'
import styles from '../../assets/styles/layout.styles'

const Container = ({ children, center }) => {
    return (
        <View style={[styles.container, center && styles.center ]}>
            {children}
        </View>
    )
}

export default Container