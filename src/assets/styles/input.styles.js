import { StyleSheet } from 'react-native'

const blur = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3
}

const focus = {
    ...blur,
    borderColor: 'blue'
}

const input = {
    paddingHorizontal: 10,
    paddingVertical: 5,
    flex: 1,
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
    left
})

export default styles