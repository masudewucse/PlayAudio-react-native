import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import AlbumComponent from '../components/Album';
import AlbumCategory from '../components/AlbumCategory';

const albumCategory = {
  id: '1',
  title: 'Happy Masud',
  albums: [
    {
      id: '1',
      imageUri: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      artistsHeadline: 'Taylor swift, cardio objective c, aviccii 1'
    },
    {
      id: '2',
      imageUri: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      artistsHeadline: 'Cardio objective c, aviccii 2'
    },
    {
      id: '3',
      imageUri: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      artistsHeadline: 'Taylor swift, cardio 3'
    },
    {
      id: '4',
      imageUri: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
      artistsHeadline: 'Taylor swift, aviccii 4'
    },
  ]

};

const alb = {
  id: '1',
  imageUri: 'http://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  artistsHeadline: 'Taylor swift, cardio objective c, aviccii 1'
}


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <AlbumCategory
        title={albumCategory.title}
        albums={albumCategory.albums} />
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
