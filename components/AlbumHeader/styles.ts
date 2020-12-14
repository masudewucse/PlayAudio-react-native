import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    image: {
        width: 300,
        height: 200,
        margin: 10,

    },
    container: {
        alignItems: 'center'

    },
    name: {
        color: 'black',
        fontSize: 30,
        fontWeight: 'bold'
    },
    creatorContainer: {
        flexDirection: 'row',
        margin: 10
    },
    creator: {
        color: 'gray',
        fontSize: 13,
        margin: 5
    },
    likes: {
        color: 'gray',
        fontSize: 13,
        margin: 5
    },
    button: {
        backgroundColor: '#1CD05D',
        height: 40,
        width: 160,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,

    }

});

export default styles;