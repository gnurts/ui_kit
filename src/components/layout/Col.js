import React, { useContext } from 'react'
import { View } from 'react-native'
import { isNumber } from '../../utils/checkType'
import { LayoutContext } from '../Context'

const Col = ({ children, span }) => {
    const { gutterX, gutterY } = useContext(LayoutContext)
    
    return (
        <View
            style={{
                width : isNumber(span) ? `${span}%` : 0,
                paddingVertical: gutterY,
                paddingHorizontal: gutterX
            }}
        >
            {children}
        </View>
    )
}

export default Col