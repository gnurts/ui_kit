import React from 'react'
import { KeyboardAvoidingView, ScrollView } from 'react-native'
import styles from '../../assets/styles/layout.styles'

const Scroll = ({ children, style }) => {
    return (
        <ScrollView
            style={[styles.container, style ]}
            keyboardDismissMode='interactive'
            keyboardShouldPersistTaps='handled'
        >
            {children}
        </ScrollView>
    )
}

const Container = ({ children, center, style }) => {
    return (
        <KeyboardAvoidingView
            style={[styles.container, center && styles.center, style ]}
            behavior='height'
        >
            {children}
        </KeyboardAvoidingView>
    )
}

Container.Scroll = Scroll

export default Container