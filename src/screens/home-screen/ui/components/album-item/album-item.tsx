import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Image, TouchableOpacity, View} from 'react-native';
import {TAlbum} from '@entities/album';
import {COLORS} from '@shared/constants';
import {THomeScreenNavProp} from '@shared/types';
import {Typography} from '@shared/ui';
import AlbumCoverPlaceholder from '../../assets/album-cover-placeholder.png';
import styles from './album-item.styles.ts';

interface IAlbumItem {
  item: TAlbum;
}

export function AlbumItem({item}: IAlbumItem) {
  const navigation = useNavigation<THomeScreenNavProp>();

  const onPress = () => {
    navigation.navigate('MAIN.SONGS_SCREEN', {
      album: item.name || item.mbid,
      artist: typeof item.artist === 'string' ? item.artist : item.artist.name,
    });
  };

  return (
    <TouchableOpacity style={styles.wrapper} onPress={onPress}>
      <View style={styles.image_wrapper}>
        <Image
          style={styles.image}
          defaultSource={AlbumCoverPlaceholder}
          source={
            item.image[3]['#text']
              ? {uri: item.image[3]['#text']}
              : AlbumCoverPlaceholder
          }
          resizeMode={'contain'}
        />
      </View>
      <Typography
        style={styles.title}
        variant={'medium_16'}
        color={COLORS.black}
        numberOfLines={1}>
        {item.name}
      </Typography>
      <Typography
        variant={'regular_12'}
        color={COLORS.dark_gray}
        numberOfLines={1}>
        {typeof item.artist === 'string' ? item.artist : item.artist.name}
      </Typography>
    </TouchableOpacity>
  );
}
