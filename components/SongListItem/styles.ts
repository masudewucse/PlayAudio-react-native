import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 15,
    },

    image: {
        width: 75,
        height: 75,
    },
    containerRight: {
        justifyContent: "space-around",
        marginLeft: 10,
    },
    title: {
        color: 'black',
        fontSize: 15
    },
    artist: {
        color: 'gray',
        fontSize: 13

    }

});

export default styles;