import React, { useState, forwardRef, useRef, useEffect, memo } from 'react'
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
            />
        )}</>
    )
}

const LeftAddon = memo(({ leftAddon, onPress }) => {
    return (
        <>{leftAddon && (
            <Pressable
                style={styles.left}
                onPress={onPress}
            >
                {leftAddon}
            </Pressable>
        )}</>
    )
})

const RightAddon = memo(({ rightAddon, onPress }) => {
    return (
        <>{rightAddon && (
            <Pressable
                style={styles.right}
                onPress={onPress}
            >
                {rightAddon}
            </Pressable>
        )}</>
    )
})

const Input = ({ placeholder, value, onFocus, onBlur, onChangeText, leftAddon, rightAddon, showSoftInputOnFocus, onSubmitEditing }, ref) => {
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

    const handleClear = () => {
        inputRef.current.focus()
        handleChangeText(null)
    }

    useEffect(() => {
        if(isObject(ref) && 'current' in ref) {
            ref.current = { focus, blur }
        }
    }, [])

    useEffect(() => {
        console.log(styles.input)
    }, [])

    return (
        <View
            style={styles[inputState]}
            accessible={true}
        >
            <LeftAddon
                leftAddon={leftAddon}
                onPress={focus}
            />
            <TextInput
                style={styles.input}
                ref={inputRef}
                placeholder={placeholder}
                value={value}
                showSoftInputOnFocus={showSoftInputOnFocus}
                onSubmitEditing={onSubmitEditing}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleChangeText}
            />
            <Clear
                value={value}
                onClear={handleClear}
            />
            <RightAddon
                rightAddon={rightAddon}
                onPress={focus}
            />
        </View>
    )
}

export default forwardRef(Input)