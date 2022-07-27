import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        height: '100%',
        width: '100%'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom:0,
        right: 0,
        backgroundColor: 'black',
        opacity: 0.5
    },
    actionSheet: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        backgroundColor: 'white',
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        overflow: 'hidden'
    },
    control: {
        height: 25,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    controlItem: {
        width: 30,
        height: 5,
        borderRadius: 2,
        backgroundColor: 'gray',
        elevation: 5
    }
})

export default styles