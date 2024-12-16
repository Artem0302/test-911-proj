import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: COLORS.light_bg,
  },
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  column_wrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
