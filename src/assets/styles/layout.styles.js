import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    row: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        display: 'flex',
        flex: 1
    }
})

export default styles