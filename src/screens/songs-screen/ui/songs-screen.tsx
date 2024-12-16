import {useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {FlatList, ListRenderItem, RefreshControl, View} from 'react-native';

import {AlbumHeader} from '@widgets/album-header';
import {TAlbumInfo, TTrack} from '@entities/album';
import {COLORS} from '@shared/constants';
import {TSongsScreenRouteProp} from '@shared/types';
import {LoadingIndicator, Typography} from '@shared/ui';
import {useGetAlbumInfo} from '../model';
import {SongItem} from './components';
import styles from './songs-screen.styles.ts';

export function SongsScreen() {
  const {t} = useTranslation('screens');
  const route = useRoute<TSongsScreenRouteProp>();
  const {artist, album} = route.params;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<TAlbumInfo | undefined>(undefined);
  const {getAlbumInfo} = useGetAlbumInfo({setData, setLoading});

  useEffect(() => {
    getAlbumInfo({artist, album});
  }, []);

  const renderItem: ListRenderItem<TTrack> = useCallback(({index, item}) => {
    return <SongItem item={item} index={index} />;
  }, []);

  const onRefresh = useCallback(() => {
    getAlbumInfo({artist, album});
  }, []);

  const emptyComponent = () => {
    if (loading) {
      return (
        <View style={styles.loading}>
          <LoadingIndicator />
        </View>
      );
    }

    return (
      <View style={styles.empty_wrapper}>
        <Typography color={COLORS.black} variant={'medium_14'}>
          {t('songs-screen.no-tracks')}
        </Typography>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={
          data ? (
            <AlbumHeader album={data} image={data?.image[3]['#text']} />
          ) : (
            <></>
          )
        }
        style={styles.flatlist}
        data={data?.tracks?.track}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={onRefresh} />
        }
        ListEmptyComponent={emptyComponent}
      />
    </View>
  );
}
