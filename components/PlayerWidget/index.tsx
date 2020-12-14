import React, { useEffect, useState, useContext } from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';
import { Song } from '../../types';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio/Sound';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { AppContext } from '../../AppContext';
import { API, graphqlOperation } from 'aws-amplify';
import { getSong } from '../../graphql/queries';

export type PlayerWidgetProps = {
    song: Song
}

const song = {
    id: 1,
    uri: 'https://not-just-trash.s3-eu-west-1.amazonaws.com/WhatsApp+Audio+2020-09-22+at+14.20.25.mp4',
    imageUri: 'https://images-na.ssl-images-amazon.com/images/I/61F66QURFyL.jpg',
    title: 'Not just dev beats',
    artist: 'Jahid'
};


const PlayerWidget = (props: PlayerWidgetProps) => {

    const [song, setSong] = useState(null);
    const [sound, setSound] = useState<Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [duration, setDuration] = useState<number | null>(null);
    const [position, setPosition] = useState<number | null>(null);

    const { songId } = useContext(AppContext);

    useEffect(() => {
        // fetch data about song
        const fetchSong = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
                setSong(data.data.getSong);
                //console.log(data);
            } catch (error) {
                //console.log(error);
            }
        };

        fetchSong();
    }, [songId]);

    //const { song } = props;
    const onPlaybackStatusUpdte = (status) => {
        setIsPlaying(status.isPlaying);
        setDuration(status.durationMillis);
        setPosition(status.positionMillis);
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync(); // if the song already playing, 
            //destroy the previous instance of the song
        }
        const { sound: newSound } = await Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlaybackStatusUpdte
        );

        setSound(newSound); // set the state value sound
    };

    // play and pause the song
    const onPlayPausePress = async () => {
        if (!sound) {
            return;
        }
        if (isPlaying) {
            await sound.stopAsync();
        } else {
            await sound.playAsync();
        }
    }

    useEffect(() => {
        // play the song
        if (song) {
            playCurrentSong();
        }

    }, [song]); // if this is empty it will be called only onece

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }

        return (position / duration) * 100;
    }

    if (!song) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%` }]} />

            <View style={styles.row}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <View style={styles.iconsContainer}>
                        <AntDesign name="hearto" size={30} color={'white'} />
                        <TouchableOpacity onPress={onPlayPausePress}>
                            <FontAwesome name={isPlaying ? 'pause' : 'play'} size={30} color={'white'} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>


        </View>
    )
}

export default PlayerWidget;