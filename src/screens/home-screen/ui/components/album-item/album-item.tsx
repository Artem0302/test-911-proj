import React from 'react';

import {Image, TouchableOpacity, View} from 'react-native';
import {COLORS} from '@shared/constants';
import {Typography} from '@shared/ui';
import {TAlbum} from '../../../types';
import AlbumCoverPlaceholder from '../../assets/album-cover-placeholder.png';
import styles from './album-item.styles.ts';

interface IAlbumItem {
  item: TAlbum;
}

export function AlbumItem({item}: IAlbumItem) {
  return (
    <TouchableOpacity style={styles.wrapper}>
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
