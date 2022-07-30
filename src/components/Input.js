import React, { useState, forwardRef, useRef, useEffect, memo, useCallback, useMemo } from 'react'
import { View, TextInput, Pressable } from 'react-native'
import styles from '../assets/styles/input.styles'
import { isFunction, isObject } from '../utils/checkType'
import Icon from 'react-native-vector-icons/FontAwesome'

const BLUR = 'blur'
const FOCUS = 'focus'

const Clear = ({ value, onClear }) => {
    return (
        <>{value && (
            <Icon
                style={styles.right}
                onPress={onClear}
                name='close'
                size={20}
                color={styles.placeholderTextColor}
            />
        )}</>
    )
}

const LeftAddon = memo(({ leftAddon, onPress }) => {
    return (
        <Pressable
            style={styles.left}
            onPress={onPress}
        >
            {leftAddon}
        </Pressable>
    )
})

const RightAddon = memo(({ rightAddon, onPress }) => {
    return (
        <Pressable
            style={styles.right}
            onPress={onPress}
        >
            {rightAddon}
        </Pressable>
    )
})

const Input = ({ placeholder, value, onFocus, onBlur, onPressIn, onChangeText, leftAddon, rightAddon, showSoftInputOnFocus, onSubmitEditing }, ref) => {
    const inputRef = useRef(null)
    const [inputState, setInputState] = useState(BLUR)

    const focus = () => inputRef.current.focus()

    const blur = () => inputRef.current.blur()

    const handleFocus = () => {
        setInputState(FOCUS)
        isFunction(onFocus) && onFocus()
    }

    const handleBlur = () => {
        setInputState(BLUR)
        isFunction(onBlur) && onBlur()
    }

    const handleChangeText = text => {
        isFunction(onChangeText) && onChangeText(text)
    }

    const handlePressIn = useCallback(() => {
        focus()
        isFunction(onPressIn) && onPressIn()
    }, [])

    const handleClear = () => {
        focus()
        handleChangeText(null)
        isFunction(onPressIn) && onPressIn()
    }

    useEffect(() => {
        if(isObject(ref) && 'current' in ref) {
            ref.current = { focus, blur }
        }
    }, [])

    return (
        <View
            style={styles[inputState]}
            accessible={true}
        >
            {leftAddon && (
                <LeftAddon
                    leftAddon={leftAddon}
                    onPress={handlePressIn}
                />
            )}
            <TextInput
                style={styles.input}
                ref={inputRef}
                placeholder={placeholder}
                placeholderTextColor={styles.placeholderTextColor}
                value={value}
                showSoftInputOnFocus={showSoftInputOnFocus}
                onSubmitEditing={onSubmitEditing}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleChangeText}
                onPressIn={handlePressIn}
            />
            <Clear
                value={value}
                onClear={handleClear}
            />
            {rightAddon && (
                <RightAddon
                    rightAddon={rightAddon}
                    onPress={handlePressIn}
                />
            )}
        </View>
    )
}

export default forwardRef(Input)