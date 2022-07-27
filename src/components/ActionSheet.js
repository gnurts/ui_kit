import React, { useEffect, useRef, useState } from 'react'
import { Keyboard, Pressable, Animated, Dimensions, Easing, KeyboardAvoidingView, StatusBar, View, ActivityIndicator, Modal } from 'react-native'
import styles from '../assets/styles/action-sheet.styles'

const SHOW = 'show'
const HIDE = 'hide'
const screenHeight = Dimensions.get('window').height

const ActionSheet = ({ isOpen, onClose, children }) => {
    const ACTIONSHEET_MAX_HEIGHT = screenHeight - StatusBar.currentHeight - 100
    const [actionSheetMaxHeight, setActionSheetMaxHeight] = useState(ACTIONSHEET_MAX_HEIGHT)
    const [visible, setVisible] = useState(false)
    const actionSheetHeight = useRef(null)
    const moveValue = useRef(screenHeight)
    const move = useRef(new Animated.Value(screenHeight)).current
    const [allowRender, setAllowRender] = useState(false)
    const [actionSheetState, setActionSheetState] = useState(HIDE)

    const onOpened = ({ finished }) => {
        if(finished) {
            setAllowRender(true)
        }
    }

    const onClosed = ({ finished }) => {
        if(finished) {
            setVisible(false)
            Keyboard.dismiss()
        }
    }

    const close = () => {
        Animated.timing(move, {
            toValue: screenHeight,
            duration: 200,
            easing: Easing.ease,
            useNativeDriver: true
        }).start(onClosed)
    }

    const handleResponderMove = e => {
        const offsetBottom = screenHeight - e.nativeEvent.pageY
        if(offsetBottom < actionSheetHeight.current) move.setValue(actionSheetHeight.current - offsetBottom)
    }

    const handleModalShow = () => setActionSheetState(SHOW)

    const handleEndResponderMove = () => {
        moveValue.current >= actionSheetHeight.current * 0.15 && onClose()
    }

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

    useEffect(() => {
        if(actionSheetState === SHOW) {
            Animated.timing(move, {
                toValue: 0,
                duration: 300,
                easing: Easing.ease,
                useNativeDriver: true
            }).start(onOpened)
        }
    }, [actionSheetState])

    useEffect(() => {
        visible || setActionSheetState(HIDE)
    }, [visible])

    useEffect(() =>{
        isOpen ? setVisible(true) : close()
    }, [isOpen])
    
    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType='fade'
            onShow={handleModalShow}
            onRequestClose={() => console.log('back press')}
        >
            <KeyboardAvoidingView
                behavior='height'
                style={[styles[actionSheetState], styles.container]}
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
                    {allowRender ? children : (
                        <ActivityIndicator
                            size='large'
                            style={{ marginTop: 20 }}
                            color='#779ECD'
                        />
                    )}
                </Animated.View>
            </KeyboardAvoidingView>
        </Modal>
    )
}

export default ActionSheet