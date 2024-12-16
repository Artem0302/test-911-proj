import React from 'react';

import {Image, TouchableOpacity} from 'react-native';
import {COLORS} from '@shared/constants';
import {Typography} from '@shared/ui';
import {TAlbum} from '../../../types';
import styles from './album-item.styles.ts';

interface IAlbumItem {
  item: TAlbum;
}

export function AlbumItem({item}: IAlbumItem) {
  return (
    <TouchableOpacity style={styles.wrapper}>
      <Image
        style={styles.image}
        source={{uri: item.image[3]['#text']}}
        resizeMode={'contain'}
      />
      <Typography variant={'medium_16'} color={COLORS.black} numberOfLines={1}>
        {item.name}
      </Typography>
      <Typography
        variant={'regular_12'}
        color={COLORS.dark_gray}
        numberOfLines={1}>
        {item.artist.name}
      </Typography>
    </TouchableOpacity>
  );
}
