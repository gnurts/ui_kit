import React, { useRef } from 'react'
import uuid from 'react-native-uuid'
import { View } from 'react-native'
import { isArray, isNumber, isObject } from '../../utils/checkType'
import { LayoutContext } from '../Context'
import styles from '../../assets/styles/layout.styles'

const Row = ({ children, gutter, style }) => {
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
        if(isObject(child)) {
            const { name } = child.type
    
            if(name === 'Col') return child
    
            return (
                <View
                    key={uuid.v4()}
                    style={{
                        paddingVertical: gutterY.current,
                        paddingHorizontal: gutterX.current,
                    }}
                >
                    {child}
                </View>
            )
        }
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
                    ...style
                } ]}
            >
                {children && (isArray(children) ? (
                    children.map(render)
                ) : (
                    [children].map(render)
                ))}
            </View>
        </LayoutContext.Provider>
    )
}

export default Row