import React, { useContext, useRef } from 'react'
import uuid from 'react-native-uuid'
import { View } from 'react-native'
import { isArray, isNumber } from '../utils/checkType'
import { LayoutContext } from './Context'
import styles from '../assets/styles/layout.styles'

const Row = ({ children, gutter }) => {
    const gutterX = useRef(0)
    const gutterY = useRef(0)

    if(isArray(gutter) && gutter.length) {
        gutterX.current = gutter[0] / 2
        gutterY.current = gutter[1] / 2
    } else if(isNumber(gutter)) {
        gutterX.current = gutter / 2
        gutterY.current = gutter / 2
    }

    const render = child => {
        const { name } = child.type

        if(name === 'Col') return child

        return (
            <View
                key={uuid.v4()}
                style={{
                    marginVertical: gutterY.current,
                    marginHorizontal: gutterX.current
                }}
            >
                {child}
            </View>
        )
    }
    
    return (
        <LayoutContext.Provider value={{
            gutterX: gutterX.current,
            gutterY: gutterY.current
        }}>
            <View
                style={[ styles.row, {
                    paddingVertical: gutterY.current,
                    paddingHorizontal: gutterX.current,
                } ]}
            >
                {isArray(children) ? (
                    children.map(render)
                ) : (
                    [children].map(render)
                )}
            </View>
        </LayoutContext.Provider>
    )
}

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

export {
    Row,
    Col
}