import React, { useEffect, useRef, useState, useCallback } from 'react'
import { isNumber } from '../utils/checkType'
import { Keyboard, Pressable, Animated, Dimensions, Easing, KeyboardAvoidingView, StatusBar, View, ActivityIndicator, Modal } from 'react-native'
import styles from '../assets/styles/action-sheet.styles'

const SCREEN_HEIGHT = Dimensions.get('window').height
const ACTIONSHEET_MAX_HEIGHT = SCREEN_HEIGHT - StatusBar.currentHeight - 100

const ActionSheet = ({ isOpen, onClose, animateDuration, children }) => {
    if(!isNumber(animateDuration)) animateDuration = 300
    
    const [actionSheetMaxHeight, setActionSheetMaxHeight] = useState(ACTIONSHEET_MAX_HEIGHT)
    const [visible, setVisible] = useState(false)
    const actionSheetHeight = useRef(null)
    const moveValue = useRef(SCREEN_HEIGHT)
    const move = useRef(new Animated.Value(SCREEN_HEIGHT)).current

    const onClosed = useCallback(({ finished }) => {
        if(finished) {
            setVisible(false)
            Keyboard.dismiss()
        }
    }, [])

    const close = useCallback(() => {
        Animated.timing(move, {
            toValue: SCREEN_HEIGHT,
            duration: animateDuration,
            easing: Easing.ease,
            useNativeDriver: true
        }).start(onClosed)
    }, [])

    const release = useCallback(() => {
        Animated.timing(move, {
            toValue: 0,
            duration: animateDuration,
            easing: Easing.ease,
            useNativeDriver: true
        }).start()
    }, [])

    const handleResponderMove = useCallback(e => {
        const offsetBottom = SCREEN_HEIGHT - e.nativeEvent.pageY
        if(offsetBottom < actionSheetHeight.current) move.setValue(actionSheetHeight.current - offsetBottom)
    }, [])

    const handleEndResponderMove = useCallback(() => {
        if(moveValue.current >= actionSheetHeight.current * 0.15) {
            onClose()
        } else {
            release()
        }
    }, [])

    useEffect(() => {
        const moveSubscription = move.addListener(({ value }) => moveValue.current = value)

        return () => move.removeListener(moveSubscription)
    }, [])

    useEffect(() => {
        const handleKeyboardShow = e => {
            setActionSheetMaxHeight(e.endCoordinates.screenY)
        }
        const handleKeyboardHide = () => {
            setActionSheetMaxHeight(ACTIONSHEET_MAX_HEIGHT)
        }

        const showSubscription = Keyboard.addListener('keyboardDidShow', handleKeyboardShow)
        const hideSubscription = Keyboard.addListener('keyboardDidHide', handleKeyboardHide)

        return () => {
            showSubscription.remove()
            hideSubscription.remove()
        }
    }, [])

    useEffect(() =>{
        isOpen ? setVisible(true) : close()
    }, [isOpen])
    
    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType='fade'
            onShow={release}
        >
            <KeyboardAvoidingView
                behavior='height'
                style={styles.container}
            >
                <Pressable
                    style={styles.overlay}
                    onPress={onClose}
                />
                <Animated.View
                    style={[
                        styles.actionSheet,
                        {
                            transform: [{ translateY: move }],
                            maxHeight: actionSheetMaxHeight
                        }
                    ]}
                    onLayout={e => actionSheetHeight.current = e.nativeEvent.layout.height}
                >
                    <View
                        style={styles.control}
                        onStartShouldSetResponder={() => true}
                        onResponderMove={handleResponderMove}
                        onTouchEnd={handleEndResponderMove}
                    >
                        <View style={styles.controlItem} />
                    </View>
                    {children}
                </Animated.View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default ActionSheet