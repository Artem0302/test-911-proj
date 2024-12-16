import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 8,
    flex: 1,
    backgroundColor: COLORS.light_bg,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
  },
});
