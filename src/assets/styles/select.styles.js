import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        zIndex: 0,
        elevation: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 3,
    },
    select: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        flex: 1,
        color: 'gray'
    },
    option: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    arrow: {
        marginRight: 10
    }
})

export default styles