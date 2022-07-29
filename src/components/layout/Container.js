import React from 'react'
import { View } from 'react-native'
import styles from '../../assets/styles/layout.styles'

const Container = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default Container