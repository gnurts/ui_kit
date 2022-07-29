import React from 'react'
import { View } from 'react-native'
import styles from '../../assets/styles/layout.styles'

const Center = ({ children }) => {
    return (
        <View style={styles.center}>
            {children}
        </View>
    )
}

export default Center