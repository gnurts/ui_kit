import { StyleSheet } from 'react-native'
import { TEXT_COLOR, PLACEHOLDER_COLOR, INPUT_BLUR_BORDER_COLOR, INPUT_FOCUS_BORDER_COLOR } from './variable.styles'

const blur = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: INPUT_BLUR_BORDER_COLOR,
    borderRadius: 3
}

const focus = {
    ...blur,
    borderColor: INPUT_FOCUS_BORDER_COLOR
}

const input = {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
    color: TEXT_COLOR
}

const right = {
    paddingRight: 10
}

const left = {
    paddingLeft: 10,
}

const styles = StyleSheet.create({
    blur,
    focus,
    input,
    right,
    left,
    placeholderTextColor: PLACEHOLDER_COLOR
})

export default styles