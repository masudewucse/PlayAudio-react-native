import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 79,
        backgroundColor: '#131313',
        width: '100%',
        borderWidth: 3,
        borderColor: 'gray',
        // alignItems: 'center'
    },
    progress: {
        height: 10,
        backgroundColor: '#bcbcbc'

    },
    row: {
        flexDirection: 'row',
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10
    },
    rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    nameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 80,
        margin: 3,
        padding: 5,
        justifyContent: 'space-between'
    },
    title: {
        color: 'white',
        fontSize: 15,
        margin: 10,
        fontWeight: 'bold'
    },
    artist: {
        color: 'gray',
        fontSize: 14

    }

});

export default styles;