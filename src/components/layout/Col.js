import React, { useContext } from 'react'
import { View } from 'react-native'
import { isNumber } from '../../utils/checkType'
import { LayoutContext } from '../Context'
import styles from '../../assets/styles/layout.styles'

const Col = ({ children, span, style }) => {
    const { gutterX, gutterY } = useContext(LayoutContext)
    
    return (
        <View
            style={[styles.col, {
                width : isNumber(span) ? `${span}%` : 0,
                paddingVertical: gutterY,
                paddingHorizontal: gutterX,
                ...style
            }]}
        >
            {children}
        </View>
    )
}

export default Col