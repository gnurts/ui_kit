import { StyleSheet } from 'react-native'
import { BUTTON_RIPPLE_COLOR, DANGER, SUCCESS, INFO } from './variable.styles'

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        overflow: 'hidden',
        elevation: 2
    },
    button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    left: {
        marginLeft: 10
    },
    rippleColor: BUTTON_RIPPLE_COLOR,
    danger: DANGER,
    success: SUCCESS,
    info: INFO
})

export default styles