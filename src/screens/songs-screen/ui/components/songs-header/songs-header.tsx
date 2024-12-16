import {useRoute} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';

import {COLORS} from '@shared/constants';
import {TSongsScreenRouteProp} from '@shared/types';
import {TextButton, Typography} from '@shared/ui';
import AlbumCoverPlaceholder from '../../assets/album-cover-placeholder.png';
import styles from './songs-header.styles.ts';

interface ISongsHeader {
  image: string | undefined;
}

export function SongsHeader({image}: ISongsHeader) {
  const {t} = useTranslation('screens');
  const route = useRoute<TSongsScreenRouteProp>();
  const {artist, album} = route.params;

  return (
    <View style={styles.header}>
      <View style={styles.image_wrapper}>
        <Image
          style={styles.image}
          defaultSource={AlbumCoverPlaceholder}
          source={image ? {uri: image} : AlbumCoverPlaceholder}
          resizeMode={'contain'}
        />
      </View>
      <Typography variant={'h1'} color={COLORS.black}>
        {album}
      </Typography>
      <Typography variant={'h2'} color={COLORS.red}>
        {artist}
      </Typography>
      <TextButton style={styles.button}>
        {t('songs-screen.more-info')}
      </TextButton>
    </View>
  );
}
