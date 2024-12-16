import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
  },
  content_wrapper: {
    paddingBottom: 32,
  },
  text_wrapper: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
  },
  subtitle: {
    flex: 1,
    marginLeft: 4,
  },
});
