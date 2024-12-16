import React, {useCallback, useState} from 'react';
import {View, FlatList, ListRenderItem, RefreshControl} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {LoadingIndicator} from '@shared/ui';
import {useGetTopAlbums} from '../model';
import {TAlbum} from '../types';
import {SearchAlbumInput, AlbumItem} from './components';
import styles from './home-screen.styles.ts';

export function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<TAlbum[] | undefined>([]);
  const {getTopAlbums, fetchNewData} = useGetTopAlbums({setData, setLoading});

  const renderItem: ListRenderItem<TAlbum> = useCallback(({item}) => {
    return <AlbumItem item={item} />;
  }, []);

  const keyExtractor = useCallback((item: TAlbum) => item.mbid + item.name, []);

  const headerComponent = useCallback(() => {
    if (!searchText && data?.length === 0) {
      return (
        <View style={styles.loading}>
          <LoadingIndicator />
        </View>
      );
    }

    return <></>;
  }, [searchText, data]);

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.wrapper}>
      <FlatList
        ListHeaderComponent={
          <SearchAlbumInput value={searchText} setValue={setSearchText} />
        }
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        ListEmptyComponent={headerComponent}
        keyExtractor={keyExtractor}
        style={styles.container}
        numColumns={2}
        columnWrapperStyle={styles.column_wrapper}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getTopAlbums} />
        }
        onEndReachedThreshold={0.2}
        onEndReached={fetchNewData}
      />
    </SafeAreaView>
  );
}
