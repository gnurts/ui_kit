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

const inputContainer = {
    flex: 1,
    marginHorizontal: 10,
    position: 'relative',
}

const input = {
    paddingHorizontal: 0,
    paddingVertical: 5,
    color: TEXT_COLOR,
    width: '100%'
}

const right = {
    paddingRight: 10
}

const left = {
    paddingLeft: 10,
}

const label = {
    position: 'absolute',
    backgroundColor: '#f2f2f2',
    textAlignVertical: 'center'
}

const styles = StyleSheet.create({
    blur,
    focus,
    inputContainer,
    input,
    right,
    left,
    label,
    placeholderTextColor: PLACEHOLDER_COLOR
})

export default styles