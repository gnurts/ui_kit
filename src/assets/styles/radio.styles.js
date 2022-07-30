import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    option: {
        paddingVertical: 5
    },
    optionContainer: {
        display: 'flex',
        flexDirection: 'row'
    },
    cycle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: 'green'
    },
    cycleCore:{
        width: 12,
        height: 12,
        backgroundColor: 'green',
        borderRadius: 6,
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        marginLeft: 10
    }
})

export default styles