import {StyleSheet} from 'react-native';
import {COLORS} from '@shared/constants';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.light_bg,
  },
  title: {
    marginBottom: 32,
  },
  body: {
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
});