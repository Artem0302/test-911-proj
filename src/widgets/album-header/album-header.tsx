import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Image, View} from 'react-native';

import {TAlbumInfo} from '@entities/album';
import {COLORS} from '@shared/constants';
import {TSongsScreenNavProp} from '@shared/types';
import {TextButton, Typography} from '@shared/ui';
import styles from './album-header.styles.ts';
import AlbumCoverPlaceholder from './assets/album-cover-placeholder.png';

interface IAlbumHeader {
  image: string | undefined;
  isButtonShown?: boolean;
  album: TAlbumInfo;
}

export function AlbumHeader({
  album,
  image,
  isButtonShown = true,
}: IAlbumHeader) {
  const {t} = useTranslation('screens');
  const navigation = useNavigation<TSongsScreenNavProp>();

  const onPress = () => {
    navigation.navigate('MAIN.ALBUM_SCREEN', {album});
  };

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
        {album.name}
      </Typography>
      <Typography variant={'h2'} color={COLORS.red}>
        {album.artist}
      </Typography>
      {isButtonShown && (
        <TextButton style={styles.button} onPress={onPress}>
          {t('songs-screen.more-info')}
        </TextButton>
      )}
    </View>
  );
}
