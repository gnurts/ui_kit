import React, { useState, forwardRef, useRef, useEffect, memo, useCallback } from 'react'
import { View, TextInput, Pressable, Text, Animated  } from 'react-native'
import styles from '../assets/styles/input.styles'
import { isFunction, isObject, isNull, isString } from '../utils/checkType'
import Icon from 'react-native-vector-icons/FontAwesome'

const BLUR = 'blur'
const FOCUS = 'focus'

const Clear = ({ onClear }) => {
    return (
        <Icon
            style={styles.right}
            onPress={onClear}
            name='close'
            size={20}
            color={styles.placeholderTextColor}
        />
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

const Input = (
    {
        placeholder,
        value = '',
        onFocus,
        onBlur,
        onPressIn,
        onChangeText,
        leftAddon,
        rightAddon,
        showSoftInputOnFocus = false,
        onSubmitEditing,
        keyboardType,
        label,
        editable = true,
        blurOnSubmit = true
    },
    ref
) => {
    if(isNull(value)) value = 'null'
    if(!isString(value)) value = value.toString()
    const inputRef = useRef(null)
    const [inputState, setInputState] = useState(BLUR)
    const stateValue = useRef(new Animated.Value(value ? 1 : 0)).current
    const labelTranslateLeftMax = useRef(0)

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
        handleChangeText('')
        isFunction(onPressIn) && onPressIn()
    }

    const handleLayoutLabel = ({ nativeEvent: { layout: { width } } }) => {
        labelTranslateLeftMax.current = (width * 0.8 - width) / 2
    }

    useEffect(() => {
        inputState === FOCUS && Animated.timing(stateValue, {
            toValue: 1,
            duration: 80,
            useNativeDriver: true
        }).start()

        inputState === BLUR && !value && Animated.timing(stateValue, {
            toValue: 0,
            duration: 80,
            useNativeDriver: true
        }).start()
    }, [inputState])

    useEffect(() => {
        if(isObject(ref) && 'current' in ref) {
            ref.current = { focus, blur }
        }
    }, [])

    return (
        <View
            style={styles[inputState]}
            accessible={true}
            onMoveShouldSetResponderCapture={() => true}
        >
            {leftAddon && (
                <LeftAddon
                    leftAddon={leftAddon}
                    onPress={handlePressIn}
                />
            )}
            <Pressable
                style={styles.inputContainer}
                onPress={handlePressIn}
            >
                <TextInput
                    style={styles.input}
                    ref={inputRef}
                    placeholder={placeholder}
                    placeholderTextColor={styles.placeholderTextColor}
                    value={value}
                    keyboardType={keyboardType || 'default'}
                    showSoftInputOnFocus={showSoftInputOnFocus}
                    onSubmitEditing={onSubmitEditing}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChangeText={handleChangeText}
                    editable={editable}
                    blurOnSubmit={blurOnSubmit}
                />
                {label && (
                    <Animated.Text
                        onLayout={handleLayoutLabel}
                        style={[
                            styles.label,
                            {
                                color: inputState === FOCUS ? '#3E4095' : styles.placeholderTextColor,
                                transform: [
                                    { translateY: stateValue.interpolate({ inputRange: [0, 1], outputRange: [9, -11] }) },
                                    { translateX: stateValue.interpolate({ inputRange: [0, 1], outputRange: [0, labelTranslateLeftMax.current] }) },
                                    { scale: stateValue.interpolate({ inputRange: [0, 1], outputRange: [1, 0.8] }) },
                                ]
                            }
                        ]}
                    >
                        {label}
                    </Animated.Text>
                )}
            </Pressable>
            {value && editable && <Clear onClear={handleClear}/>}
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