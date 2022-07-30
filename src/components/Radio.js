import React, { useState, useContext } from 'react'
import { RadioContext } from './Context'
import { isFunction } from '../utils/checkType'
import styles from '../assets/styles/radio.styles'

import { Pressable, View } from 'react-native'
import Text from './Text'

const Option = ({ value, label }) => {
    const { changeSelected, selected } = useContext(RadioContext)

    const handlePress = () => changeSelected(value)

    return (
        <Pressable
            style={styles.option}
            onPress={handlePress}
        >
            <View style={styles.optionContainer}>
                <View style={styles.center}>
                    <View style={[styles.cycle, styles.center]}>
                        {selected === value && (
                            <View style={styles.cycleCore}></View>
                        )}
                    </View>
                </View>
                <Text style={styles.label}>{label}</Text>
            </View>
        </Pressable>
    )
}

const Radio = ({ children, defaultValue, onChange }) => {
    const [selected, setSelected] = useState(defaultValue)

    const changeSelected = value => {
        setSelected(value)
        isFunction(onChange) && onChange(value)
    }

    return (
        <RadioContext.Provider value={{ changeSelected, selected }}>
            {children}
        </RadioContext.Provider>
    )
}

Radio.Option = Option

export default Radio