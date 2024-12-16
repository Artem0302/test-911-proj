import React, {useCallback, useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useGetTopAlbums} from '../model';
import {TAlbum} from '../types';
import {SearchAlbumInput} from './components';
import styles from './home-screen.styles.ts';

export function HomeScreen() {
  const {getTopAlbums} = useGetTopAlbums();
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<TAlbum[]>([]);

  useEffect(() => {
    getTopAlbums({setData});
  }, []);

  const renderItem = useCallback(() => {
    return <></>;
  }, []);

  const keyExtractor = useCallback((item: TAlbum) => item.mbid + item.name, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        ListHeaderComponent={
          <SearchAlbumInput value={searchText} setValue={setSearchText} />
        }
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={<></>}
        keyExtractor={keyExtractor}
        style={styles.container}
        numColumns={2}
        columnWrapperStyle={styles.column_wrapper}
      />
    </SafeAreaView>
  );
}
