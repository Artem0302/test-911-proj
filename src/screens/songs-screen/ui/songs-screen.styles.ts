import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatlist: {
    flex: 1,
    paddingHorizontal: 16,
  },
  empty_wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
