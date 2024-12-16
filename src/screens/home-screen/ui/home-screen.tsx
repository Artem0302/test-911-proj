import React, {useCallback, useEffect, useState} from 'react';
import {View, FlatList, ListRenderItem, RefreshControl} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {useDebounce} from '@shared/hooks';
import {LoadingIndicator} from '@shared/ui';
import {useGetTopAlbums} from '../model';
import {TAlbum} from '../types';
import {SearchAlbumInput, AlbumItem} from './components';
import styles from './home-screen.styles.ts';

export function HomeScreen() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TAlbum[] | undefined>(undefined);
  const {getTopAlbums, fetchNewData, searchAlbumsRequest} = useGetTopAlbums({
    setData,
    setLoading,
  });
  const [searchText, setSearchText] = useState('');
  const searchDebounce = useDebounce<string>(searchText, 400);

  useEffect(() => {
    if (searchDebounce.length !== 0) {
      searchAlbumsRequest({searchField: searchDebounce});

      return;
    }

    getTopAlbums();
  }, [searchDebounce]);

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

  const onRefresh = useCallback(() => {
    if (searchText) {
      return searchAlbumsRequest({searchField: searchDebounce});
    }
    getTopAlbums();
  }, [searchDebounce]);

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
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        onEndReachedThreshold={0.2}
        onEndReached={() => data !== undefined && fetchNewData(searchDebounce)}
      />
    </SafeAreaView>
  );
}
