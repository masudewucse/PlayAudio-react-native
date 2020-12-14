import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

import { API, graphqlOperation } from 'aws-amplify';

import albumDetails from '../data/albumDetails';
import SongListItem from '../components/SongListItem';
import { FlatList } from 'react-native-gesture-handler';
import AlbumHeader from '../components/AlbumHeader';

import { getAlbum } from '../graphql/queries';

const AlbumScreen = () => {

    const route = useRoute();
    const albumId = route.params.id;

    const [album, setAlbum] = useState(null);

    useEffect(() => {
        const fetchAlbumDetails = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }));
                setAlbum(data.data.getAlbum);
                //console.log(data.data.getAlbum);
            } catch (error) {
                console.log(error);
            }
        }
        fetchAlbumDetails();
        //console.log(album);
    }, [])

    if (!album) {
        return <Text>Loading..</Text>
    }

    return (
        <View>
            <FlatList
                data={album.songs.items}
                renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={album} />}
            />


        </View>
    )
}

export default AlbumScreen;