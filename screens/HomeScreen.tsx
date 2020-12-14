import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
//import { FlatList } from 'react-native-gesture-handler';
//import AlbumComponent from '../components/Album';

import { API, graphqlOperation } from 'aws-amplify';

import AlbumCategory from '../components/AlbumCategory';
import albumCategories from '../data/albumCategories';

import { listAlbumCategorys } from '../graphql/queries';

export default function HomeScreen() {

  const [categories, setCategories] = useState([]);

  React.useEffect(() => {
    const fetchAlbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys));
        //console.log(data.data.listAlbumCategorys.items);
        setCategories(data.data.listAlbumCategorys.items);
        //console.log(data);
      } catch (err) {

      }
    }
    fetchAlbumCategories();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <AlbumCategory
            title={item.title}
            albums={item.album.items}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
