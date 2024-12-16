import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export default StyleSheet.create({
  wrapper: {
    marginHorizontal: 8,
    flex: 1,
    backgroundColor: COLORS.light_bg,
  },
  image_wrapper: {
    width: '100%',
    flex: 1,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    aspectRatio: 1,
    borderRadius: 8,
  },
  title: {
    marginTop: 4,
  },
});
