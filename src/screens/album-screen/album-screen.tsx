import {useRoute} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {ScrollView, View} from 'react-native';

import {AlbumHeader} from '@widgets/album-header';
import {COLORS} from '@shared/constants';
import {TAlbumScreenRouteProp} from '@shared/types';
import {Typography} from '@shared/ui';
import styles from './album-screen.styles.ts';

export function AlbumScreen() {
  const {t} = useTranslation('screens');
  const route = useRoute<TAlbumScreenRouteProp>();
  const {album} = route.params;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.content_wrapper}>
      <AlbumHeader
        image={album?.image[3]['#text']}
        album={album}
        isButtonShown={false}
      />
      <View style={styles.text_wrapper}>
        <Typography variant={'medium_16'} color={COLORS.black}>
          {t('album-screen.listeners')}
        </Typography>
        <Typography
          style={styles.subtitle}
          variant={'medium_16'}
          color={COLORS.blue}>
          {album.listeners}
        </Typography>
      </View>
      <View style={styles.text_wrapper}>
        <Typography variant={'medium_16'} color={COLORS.black}>
          {t('album-screen.playcount')}
        </Typography>
        <Typography
          style={styles.subtitle}
          variant={'medium_16'}
          color={COLORS.blue}>
          {album.playcount}
        </Typography>
      </View>
      <View style={styles.text_wrapper}>
        <Typography variant={'medium_16'} color={COLORS.black}>
          {t('album-screen.url')}
        </Typography>
        <Typography
          style={styles.subtitle}
          variant={'medium_16'}
          color={COLORS.blue}>
          {album.url}
        </Typography>
      </View>
      <View style={styles.text_wrapper}>
        <Typography variant={'medium_16'} color={COLORS.black}>
          {t('album-screen.published')}
        </Typography>
        <Typography
          style={styles.subtitle}
          variant={'medium_16'}
          color={COLORS.blue}>
          {album.wiki.published}
        </Typography>
      </View>
      <View style={styles.text_wrapper}>
        <Typography variant={'medium_16'} color={COLORS.black}>
          {t('album-screen.description')}
        </Typography>
        <Typography
          style={styles.subtitle}
          variant={'medium_16'}
          color={COLORS.blue}>
          {album.wiki.content}
        </Typography>
      </View>
    </ScrollView>
  );
}
