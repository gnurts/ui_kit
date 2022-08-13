import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import styles from '../../assets/styles/layout.styles'

const Container = ({ children, center }) => {
    return (
        <KeyboardAvoidingView
            style={[styles.container, center && styles.center ]}
            behavior='height'
        >
            {children}
        </KeyboardAvoidingView>
    )
}

export default Container