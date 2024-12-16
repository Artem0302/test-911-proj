import React from 'react';
import {View} from 'react-native';

import {TTrack} from '@entities/album';
import {COLORS} from '@shared/constants';
import {formatSecondsToTime} from '@shared/helpers';
import {Typography} from '@shared/ui';
import styles from './song-item.styles.ts';

interface ISongItem {
  item: TTrack;
  index: number;
}

export function SongItem({item, index}: ISongItem) {
  return (
    <View style={styles.container}>
      <Typography variant={'medium_16'} color={COLORS.black}>
        {String(index + 1)}
      </Typography>
      <View style={styles.body}>
        <Typography
          variant={'medium_16'}
          color={COLORS.black}
          style={styles.name}>
          {item.name}
        </Typography>
        <Typography variant={'medium_16'} color={COLORS.black}>
          {formatSecondsToTime(item.duration)}
        </Typography>
      </View>
    </View>
  );
}
